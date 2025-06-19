"use client";

import Sidebar from '../../components/Sidebar';
import { useEffect, useState } from 'react';

export default function SignupPage() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', paddingTop: isMobile ? '140px' : '0', fontFamily: 'Segoe UI' }}>
      <Sidebar />
      <div style={{ padding: isMobile ? '20px' : '40px', marginLeft: isMobile ? '0' : '220px', color: '#222' }}>
        <h1 style={{ fontSize: '1.8rem', color: '#1f2937' }}>Signup Page</h1>
        <p>Create a new employee account here.</p>
      </div>
    </div>
  );
}
