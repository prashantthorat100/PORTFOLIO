import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory messages store (since MongoDB is not used)
const contactInquiries = [];

// Live LeetCode Cache
let leetcodeCache = { data: null, timestamp: 0 };

// LeetCode Profile Live Tracking API
app.get('/api/leetcode', async (req, res) => {
  try {
    const now = Date.now();
    const cacheAge = now - leetcodeCache.timestamp;
    if (leetcodeCache.data && cacheAge < 5 * 60 * 1000) {
      return res.json(leetcodeCache.data);
    }

    const username = req.query.username || 'prashantthorat100';
    const query = {
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
            profile {
              ranking
              reputation
            }
          }
        }
      `,
      variables: { username }
    };

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      body: JSON.stringify(query)
    });

    const json = await response.json();
    const matchedUser = json?.data?.matchedUser;

    if (matchedUser) {
      const ac = matchedUser.submitStatsGlobal?.acSubmissionNum || [];
      const allCount = ac.find(item => item.difficulty === 'All')?.count || 0;
      const easyCount = ac.find(item => item.difficulty === 'Easy')?.count || 0;
      const mediumCount = ac.find(item => item.difficulty === 'Medium')?.count || 0;
      const hardCount = ac.find(item => item.difficulty === 'Hard')?.count || 0;
      const ranking = matchedUser.profile?.ranking || null;

      const result = {
        success: true,
        username: matchedUser.username,
        totalSolved: allCount,
        easy: easyCount,
        medium: mediumCount,
        hard: hardCount,
        ranking: ranking,
        updatedAt: new Date().toISOString()
      };

      leetcodeCache = { data: result, timestamp: now };
      return res.json(result);
    }

    throw new Error('Could not fetch LeetCode stats for user');
  } catch (err) {
    console.warn('LeetCode live fetch fallback:', err.message);
    return res.json({
      success: true,
      fallback: true,
      username: 'prashantthorat100',
      totalSolved: 80,
      easy: 46,
      medium: 32,
      hard: 2,
      ranking: 1991580,
      updatedAt: new Date().toISOString()
    });
  }
});


// Contact Form Submission API
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (name, email, and message).'
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const inquiry = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      subject: subject ? subject.trim() : 'General Inquiry',
      message: message.trim(),
      receivedAt: new Date().toISOString()
    };

    contactInquiries.push(inquiry);
    console.log(`[Contact Submission] Received from ${inquiry.name} <${inquiry.email}>: "${inquiry.subject}"`);

    return res.status(200).json({
      success: true,
      message: `Thank you ${inquiry.name}! Your message has been sent successfully. Prashant will get back to you shortly.`,
      inquiryId: inquiry.id
    });
  } catch (err) {
    console.error('Error handling contact submission:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your message.'
    });
  }
});

// Serve frontend build in production mode
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Fallback route for SPA
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send('Portfolio API is running. Start client via Vite in development.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
});
