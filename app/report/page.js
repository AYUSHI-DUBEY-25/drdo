"use client";

import Sidebar from '../../components/Sidebar';
import { useEffect, useState } from 'react';

export default function ReportPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); 
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f4f4f4',
      fontFamily: 'Segoe UI, sans-serif',
      paddingTop: isMobile ? '120px' : '0'
    }}>
      <Sidebar />

      <div style={{
        padding: '20px',
        marginLeft: isMobile ? '0' : '220px',
        maxWidth: '800px',
        color: '#222'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#1f2937' }}>Report an Issue</h1>

        {submitted && (
          <div style={{
            backgroundColor: '#d1fae5',
            color: '#065f46',
            padding: '12px 20px',
            borderRadius: '6px',
            marginBottom: '20px',
            fontWeight: '500'
          }}>
            Complaint submitted successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
          }}
        >
          <input type="text" placeholder="Full Name" required style={inputStyle} />
          <input type="tel" placeholder="Contact Number" required style={inputStyle} />
          <input type="text" placeholder="Designation" required style={inputStyle} />

          <select required style={inputStyle}>
            <option value="">Select Complaint Type</option>
            <option value="it">IT</option>
            <option value="networking">Networking</option>
            <option value="hardware">Hardware</option>
            <option value="software">Software</option>
            <option value="other">Other</option>
          </select>

          <textarea placeholder="Remarks (Explain your issue...)" rows="4" style={inputStyle} />

          <label style={{ fontSize: '0.95rem', color: '#333' }}>
            Attach Screenshot / Image (Optional):
            <input type="file" accept="image/*" style={fileInputStyle} />
          </label>

          <button type="submit" style={buttonStyle}>Submit Complaint</button>
        </form>
      </div>
    </div>
  );
}


const inputStyle = {
  padding: '12px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '6px',
  outline: 'none'
};

const buttonStyle = {
  padding: '14px',
  fontSize: '1rem',
  backgroundColor: '#1f2937',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '500'
};

const fileInputStyle = {
  display: 'block',
  marginTop: '8px'
};
