import React from 'react';

export function TechBadgeIcon({ name, color }) {
  const iconStyle = { color: color || '#3b82f6' };

  switch (name) {
    case 'Python':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" style={iconStyle}>
          <path
            d="M11.9 2C7.8 2 8.2 3.8 8.2 3.8V6h3.8v.6H6.5S4 6.3 4 10.2c0 3.9 2.2 3.8 2.2 3.8h1.3v-1.9s-.1-2.2 2.2-2.2h3.8s2.1 0 2.1-2V4.3S16 2 11.9 2Z"
            fill="#38bdf8"
          />
          <path
            d="M12.1 22c4.1 0 3.7-1.8 3.7-1.8V18h-3.8v-.6h5.5S20 17.7 20 13.8c0-3.9-2.2-3.8-2.2-3.8h-1.3v1.9s.1 2.2-2.2 2.2h-3.8s-2.1 0-2.1 2v3.6S8 22 12.1 22Z"
            fill="#fbbf24"
          />
          <circle cx="10" cy="4.2" r="0.8" fill="#0f172a" />
          <circle cx="14" cy="19.8" r="0.8" fill="#0f172a" />
        </svg>
      );
    case 'React':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#61DAFB" strokeWidth="1.6">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4ade80" strokeWidth="1.8">
          <path d="M12 2 4 6.6v10.8L12 22l8-4.6V6.6L12 2Z" />
          <path d="M9.5 9.5v5l2.5 1.5 2.5-1.5v-5L12 8 9.5 9.5Z" />
        </svg>
      );
    case 'FastAPI':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <circle cx="12" cy="12" r="9.5" stroke="#14b8a6" strokeWidth="1.8" />
          <path d="M13 6.5 8.5 13h3.2l-.7 4.5L15.5 11h-3.2L13 6.5Z" fill="#14b8a6" />
        </svg>
      );
    case 'Flask':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#38bdf8" strokeWidth="1.8">
          <path d="M9 3h6M10 3v5.2L5.5 16.8A2.5 2.5 0 0 0 7.7 20.5h8.6a2.5 2.5 0 0 0 2.2-3.7L14 8.2V3" />
          <path d="M7.5 15h9" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#2563eb" />
          <path
            d="M7.2 11h5.2M9.8 11v6.5M16.8 12.2c-.4-.4-1-.6-1.7-.6-1 0-1.7.5-1.7 1.3 0 .8.6 1.1 1.7 1.4 1.1.3 1.8.8 1.8 1.7 0 1-.8 1.6-2 1.6-.9 0-1.6-.3-2.1-.8"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#eab308" />
          <path
            d="M10.5 11v4.8c0 1-.6 1.6-1.5 1.6-.7 0-1.2-.3-1.5-.8M16.8 12c-.4-.4-1-.6-1.6-.6-.9 0-1.5.5-1.5 1.2 0 .7.5 1 1.5 1.3 1.1.3 1.7.7 1.7 1.6 0 1-.8 1.6-1.9 1.6-.8 0-1.5-.3-2-.8"
            stroke="#0f172a"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'Tkinter':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 8.5h18" />
          <circle cx="6" cy="6.2" r="0.8" fill="#60a5fa" />
          <circle cx="8.5" cy="6.2" r="0.8" fill="#60a5fa" />
          <rect x="6.5" y="11.5" width="11" height="5" rx="1" />
        </svg>
      );
    case 'HTML5':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#f97316" strokeWidth="1.8">
          <path d="m4 3 1.6 15.2L12 21l6.4-2.8L20 3H4Z" />
          <path d="M16 7.5H8.5l.4 4h6.7l-.5 4.2-3.1.9-3.1-.9-.2-2" />
        </svg>
      );
    case 'CSS3':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#38bdf8" strokeWidth="1.8">
          <path d="m4 3 1.6 15.2L12 21l6.4-2.8L20 3H4Z" />
          <path d="M8.5 7.5h7l-.4 4H9.2l.3 3.3 2.5.8 2.5-.8.3-2.8" />
        </svg>
      );
    case 'Streamlit':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fb7185" strokeWidth="1.8">
          <path d="M12 4 4 9l8 4.5L20 9l-8-5Z" />
          <path d="m4 14.5 8 4.5 8-4.5" />
        </svg>
      );
    case 'Pandas':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <rect x="6" y="3.5" width="2.6" height="17" rx="1.2" fill="#818cf8" />
          <rect x="11" y="3.5" width="2.6" height="5" rx="1" fill="#38bdf8" />
          <rect x="11" y="10.2" width="2.6" height="3.6" rx="1" fill="#facc15" />
          <rect x="11" y="15.5" width="2.6" height="5" rx="1" fill="#38bdf8" />
          <rect x="16" y="3.5" width="2.6" height="17" rx="1.2" fill="#818cf8" />
        </svg>
      );
    case 'Jupyter':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fb923c" strokeWidth="1.8">
          <path d="M5 9.5C6.5 6.8 9 5.5 12 5.5s5.5 1.3 7 4" strokeLinecap="round" />
          <path d="M19 14.5c-1.5 2.7-4 4-7 4s-5.5-1.3-7-4" strokeLinecap="round" />
          <circle cx="17.5" cy="4.5" r="1.4" fill="#fb923c" />
          <circle cx="6.2" cy="19.2" r="1.4" fill="#94a3b8" />
          <circle cx="5.2" cy="5.2" r="1" fill="#94a3b8" />
        </svg>
      );
    case 'Power BI':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <rect x="5" y="12" width="3.2" height="8" rx="1.2" fill="#fde047" />
          <rect x="10.4" y="8" width="3.2" height="12" rx="1.2" fill="#facc15" />
          <rect x="15.8" y="4" width="3.2" height="16" rx="1.2" fill="#eab308" />
        </svg>
      );
    case 'n8n':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fb7185" strokeWidth="1.8">
          <circle cx="5.5" cy="12" r="2.2" />
          <circle cx="12" cy="7.5" r="2.2" />
          <circle cx="12" cy="16.5" r="2.2" />
          <circle cx="18.5" cy="12" r="2.2" />
          <path d="M7.5 10.8 10 8.7M7.5 13.2 10 15.3M14 8.7l2.5 2.1M14 15.3l2.5-2.1" />
        </svg>
      );
    case 'PostgreSQL':
    case 'MySQL':
    case 'SQLite':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={color || '#3b82f6'} strokeWidth="1.8">
          <ellipse cx="12" cy="6" rx="7.5" ry="3" />
          <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
          <path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
        </svg>
      );
    case 'bcrypt':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#38bdf8" strokeWidth="1.8">
          <rect x="5" y="11" width="14" height="9.5" rx="2.5" />
          <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
          <circle cx="12" cy="15.8" r="1.4" fill="#38bdf8" />
        </svg>
      );
    case 'Git':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#f97316" strokeWidth="1.8">
          <circle cx="7" cy="6" r="2.2" />
          <circle cx="7" cy="18" r="2.2" />
          <circle cx="17" cy="12" r="2.2" />
          <path d="M7 8.2v7.6M9.2 6h3.3a2.5 2.5 0 0 1 2.5 2.5v1.3" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: '#e2e8f0' }}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#3b82f6" strokeWidth="1.8">
          <path d="m8 9-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function CategoryIcon({ id }) {
  switch (id) {
    case 'backend':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <circle cx="7" cy="7" r="1" fill="currentColor" />
          <circle cx="7" cy="17" r="1" fill="currentColor" />
        </svg>
      );
    case 'frontend':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 21h8M12 18v3M3 9h18" strokeLinecap="round" />
        </svg>
      );
    case 'data':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 19h16M7 15V9M12 15V5M17 15v-3" strokeLinecap="round" />
        </svg>
      );
    case 'database':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 4 7v6c0 5 3.5 7.8 8 9 4.5-1.2 8-4 8-9V7l-8-4Z" />
          <path d="m9.5 12 1.8 1.8 3.5-3.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

