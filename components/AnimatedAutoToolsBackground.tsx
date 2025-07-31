import React from 'react';

const AnimatedAutoToolsBackground = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 2,
      pointerEvents: 'none',
      overflow: 'hidden',
      background: 'transparent', // Ensure no background color is set
    }}
  >
    {/* Wrench */}
    <svg
      width="80"
      height="80"
      style={{
        position: 'absolute',
        top: '12%',
        left: '8%',
        opacity: 0.13,
        animation: 'wrench-rotate 18s linear infinite',
      }}
      viewBox="0 0 64 64"
      fill="none"
    >
      <path d="M54 10a10 10 0 0 0-14.14 0l-4.24 4.24 14.14 14.14 4.24-4.24A10 10 0 0 0 54 10zM8 56l18.38-6.13a4 4 0 0 0 1.6-6.54l-7.31-7.31a4 4 0 0 0-6.54 1.6L8 56z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    {/* Gear */}
    <svg
      width="90"
      height="90"
      style={{
        position: 'absolute',
        top: '65%',
        left: '75%',
        opacity: 0.11,
        animation: 'gear-spin 22s linear infinite',
      }}
      viewBox="0 0 64 64"
      fill="none"
    >
      <circle cx="32" cy="32" r="12" stroke="#fff" strokeWidth="2.5" />
      <g stroke="#fff" strokeWidth="2">
        <line x1="32" y1="2" x2="32" y2="14" />
        <line x1="32" y1="50" x2="32" y2="62" />
        <line x1="2" y1="32" x2="14" y2="32" />
        <line x1="50" y1="32" x2="62" y2="32" />
        <line x1="12.22" y1="12.22" x2="20.49" y2="20.49" />
        <line x1="43.51" y1="43.51" x2="51.78" y2="51.78" />
        <line x1="12.22" y1="51.78" x2="20.49" y2="43.51" />
        <line x1="43.51" y1="20.49" x2="51.78" y2="12.22" />
      </g>
    </svg>
    {/* Piston */}
    <svg
      width="70"
      height="70"
      style={{
        position: 'absolute',
        top: '40%',
        left: '55%',
        opacity: 0.10,
        animation: 'piston-float 16s ease-in-out infinite',
      }}
      viewBox="0 0 64 64"
      fill="none"
    >
      <rect x="18" y="6" width="28" height="18" rx="4" stroke="#fff" strokeWidth="2.5" />
      <rect x="28" y="24" width="8" height="18" rx="2" stroke="#fff" strokeWidth="2.5" />
      <circle cx="32" cy="54" r="6" stroke="#fff" strokeWidth="2.5" />
    </svg>
    <style>{`
      @keyframes wrench-rotate {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(20deg) scale(1.08); }
        100% { transform: rotate(360deg) scale(1); }
      }
      @keyframes gear-spin {
        0% { transform: rotate(0deg) scale(1); }
        100% { transform: rotate(360deg) scale(1.1); }
      }
      @keyframes piston-float {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-18px) scale(1.07); }
      }
    `}</style>
  </div>
);

export default AnimatedAutoToolsBackground; 