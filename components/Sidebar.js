"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // call on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      width: isMobile ? '100%' : '200px',
      height: isMobile ? 'auto' : '100vh',
      background: '#1f1f1f',
      color: 'white',
      padding: isMobile ? '10px 0' : '120px 0 0 0',
      display: 'flex',
      flexDirection: isMobile ? 'row' : 'column',
      justifyContent: isMobile ? 'space-around' : 'flex-start',
      alignItems: 'center',
      position: isMobile ? 'fixed' : 'fixed',
      top: isMobile ? '90px' : '0',
      left: isMobile ? '0' : '0',
      zIndex: 10
    }}>
      <nav style={{
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        gap: isMobile ? '20px' : '15px',
        paddingLeft: isMobile ? '0' : '20px'
      }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        <Link href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        <Link href="/signup" style={{ color: 'white', textDecoration: 'none' }}>Signup</Link>
        <Link href="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</Link>
        <Link href="/report" style={{ color: 'white', textDecoration: 'none' }}>Report Issue</Link>
      </nav>
    </div>
  );
}
