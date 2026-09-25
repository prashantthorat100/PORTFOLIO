import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../components/Icons';

export default function NotFoundPage() {
  return (
    <div className="not-found-page" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 20px 60px 20px' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1 }} className="text-gradient">
          404
        </div>
        <h1 style={{ fontSize: '2rem', marginTop: '16px', marginBottom: '12px' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '1.05rem' }}>
          The page you are looking for does not exist or has been moved. Explore the portfolio using the navigation above.
        </p>
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', padding: '12px 28px' }}>
          <span>Return to Homepage</span>
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </div>
  );
}
