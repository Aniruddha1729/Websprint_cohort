import React from 'react';

export const SpiderIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className = '',
  style = {}
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${className}`}
    style={style}
    aria-hidden="true"
  >
    <path d="M12 2C11.4 2 11 2.4 11 3V5.1C9.6 5.5 8.3 6.3 7.3 7.3C6.3 8.3 5.5 9.6 5.1 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H5.1C5.5 14.4 6.3 15.7 7.3 16.7C8.3 17.7 9.6 18.5 11 18.9V21C11 21.6 11.4 22 12 22C12.6 22 13 21.6 13 21V18.9C14.4 18.5 15.7 17.7 16.7 16.7C17.7 15.7 18.5 14.4 18.9 13H21C21.6 13 22 12.6 22 12C22 11.4 21.6 11 21 11H18.9C18.5 9.6 17.7 8.3 16.7 7.3C15.7 6.3 14.4 5.5 13 5.1V3C13 2.4 12.6 2 12 2ZM12 7C14.8 7 17 9.2 17 12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7ZM12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9Z" />
  </svg>
);
