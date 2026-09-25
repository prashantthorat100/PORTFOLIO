import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function LeetCodeLiveCard() {
  const [stats, setStats] = useState({
    totalSolved: 80,
    easy: 46,
    medium: 32,
    hard: 2,
    ranking: null,
    loading: true,
    isLive: false
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchLeetCodeData() {
      try {
        const res = await fetch('/api/leetcode?username=prashantthorat100');
        if (!res.ok) throw new Error('Failed to fetch from server API');
        const data = await res.json();

        if (isMounted && data.totalSolved !== undefined) {
          setStats({
            totalSolved: data.totalSolved,
            easy: data.easy,
            medium: data.medium,
            hard: data.hard,
            ranking: data.ranking,
            loading: false,
            isLive: !data.fallback
          });
        }
      } catch (err) {
        // Direct client fallback attempt
        try {
          const directRes = await fetch('https://leetcode-stats-api.herokuapp.com/prashantthorat100');
          const directData = await directRes.json();
          if (isMounted && directData.totalSolved) {
            setStats({
              totalSolved: directData.totalSolved,
              easy: directData.easySolved || 46,
              medium: directData.mediumSolved || 32,
              hard: directData.hardSolved || 2,
              ranking: directData.ranking || null,
              loading: false,
              isLive: true
            });
            return;
          }
        } catch (_) {}

        if (isMounted) {
          setStats((prev) => ({ ...prev, loading: false, isLive: false }));
        }
      }
    }

    fetchLeetCodeData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <a
      href="https://leetcode.com/u/prashantthorat100/"
      target="_blank"
      rel="noopener noreferrer"
      className="stat-card leetcode-live-card"
      style={{
        display: 'block',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
      }}
      title="View Prashant's LeetCode Profile"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="stat-label">Problem Solving</div>
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.72rem',
            padding: '2px 8px',
            borderRadius: '9999px',
            background: 'rgba(34, 197, 94, 0.12)',
            color: '#22c55e',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            fontWeight: 600
          }}
        >
          <span 
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              display: 'inline-block',
              animation: 'pulse 1.8s infinite'
            }}
          />
          <span>LIVE TRACKING</span>
        </div>
      </div>

      <div className="stat-value" style={{ fontSize: '1.45rem', marginTop: '6px' }}>
        {stats.loading ? (
          <span style={{ opacity: 0.6 }}>Loading stats...</span>
        ) : (
          <span>{stats.totalSolved} Problems Solved</span>
        )}
      </div>

      {/* Difficulty breakdown pills */}
      <div 
        style={{ 
          display: 'flex', 
          gap: '6px', 
          marginTop: '8px', 
          flexWrap: 'wrap',
          fontSize: '0.75rem',
          fontWeight: 600
        }}
      >
        <span style={{ padding: '2px 7px', borderRadius: '4px', background: 'rgba(0, 184, 163, 0.15)', color: '#00b8a3' }}>
          Easy: {stats.easy}
        </span>
        <span style={{ padding: '2px 7px', borderRadius: '4px', background: 'rgba(255, 192, 30, 0.15)', color: '#ffc01e' }}>
          Med: {stats.medium}
        </span>
        <span style={{ padding: '2px 7px', borderRadius: '4px', background: 'rgba(239, 71, 67, 0.15)', color: '#ef4743' }}>
          Hard: {stats.hard}
        </span>
      </div>

      <div className="stat-note" style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>LeetCode @prashantthorat100</span>
        <span style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 600 }}>Profile ↗</span>
      </div>
    </a>
  );
}
