import type { Config } from "@netlify/functions";

const fallback = {
  success: true,
  fallback: true,
  username: "prashantthorat100",
  totalSolved: 80,
  easy: 46,
  medium: 32,
  hard: 2,
  ranking: 1991580,
};

export default async (request: Request) => {
  try {
    const username = new URL(request.url).searchParams.get("username") || fallback.username;
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Netlify Portfolio Stats",
      },
      body: JSON.stringify({
        query: `query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            submitStatsGlobal { acSubmissionNum { difficulty count } }
            profile { ranking }
          }
        }`,
        variables: { username },
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) throw new Error(`LeetCode responded with ${response.status}`);
    const payload = await response.json();
    const matchedUser = payload?.data?.matchedUser;
    if (!matchedUser) throw new Error("LeetCode user was not found");

    const counts = matchedUser.submitStatsGlobal?.acSubmissionNum || [];
    const countFor = (difficulty: string) =>
      counts.find((item: { difficulty: string; count: number }) => item.difficulty === difficulty)?.count || 0;

    return Response.json({
      success: true,
      username: matchedUser.username,
      totalSolved: countFor("All"),
      easy: countFor("Easy"),
      medium: countFor("Medium"),
      hard: countFor("Hard"),
      ranking: matchedUser.profile?.ranking || null,
      updatedAt: new Date().toISOString(),
    }, { headers: { "Cache-Control": "public, max-age=300, s-maxage=300" } });
  } catch (error) {
    console.warn("Using fallback LeetCode stats", error instanceof Error ? error.message : "Unknown error");
    return Response.json({ ...fallback, updatedAt: new Date().toISOString() }, {
      headers: { "Cache-Control": "public, max-age=60, s-maxage=60" },
    });
  }
};

export const config: Config = {
  path: "/api/leetcode",
  method: "GET",
};
