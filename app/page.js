"use client"; 

import Sidebar from '../components/Sidebar';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f4f4f4',
      minHeight: '100vh',
      paddingTop: isMobile ? '160px' : '0'
    }}>

      {/* DRDO Logo */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1000
      }}>
        <Image
          src="/logo01.png"
          alt="DRDO Logo"
          width={isMobile ? 60 : 80}
          height={isMobile ? 60 : 80}
          style={{ borderRadius: '10px', border: '2px solid #333' }}
        />
      </div>

      {/* ✅ Sidebar */}
      <Sidebar />

      {/* ✅ Main Content */}
      <div style={{
        padding: isMobile ? '20px' : '40px',
        marginLeft: isMobile ? '0' : '220px',
        maxWidth: '900px',
        marginTop: isMobile ? '150px' : '0',
        color: '#222'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#1f2937' }}>Welcome to the Employee Dashboard</h1>

        <p style={{ fontSize: '1rem', marginTop: '15px', lineHeight: '1.6' }}>
          This dashboard is designed to streamline the process of reporting technical issues by employees. 
          Whether it's related to networking, IT infrastructure, or internal software problems, employees can easily file complaints and track status here.
        </p>

        <h2 style={{ marginTop: '30px', fontSize: '1.4rem', color: '#374151' }}>About DRDO</h2>

        <p style={{ marginTop: '10px', fontSize: '1rem', lineHeight: '1.6' }}>
          The Defence Research and Development Organisation (DRDO) is the premier agency under the Ministry of Defence, Government of India, 
          responsible for military research and development. DRDO develops defence technologies in fields such as aeronautics, armaments, combat vehicles, 
          engineering systems, missiles, advanced computing, naval systems, and life sciences.
        </p>
      </div>
    </div>
  );
}
