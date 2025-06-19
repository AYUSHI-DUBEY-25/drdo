import './globals.css';

export const metadata = {
  title: 'Employee Dashboard',
  description: 'Report IT/Network Issues',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div style={{ display: 'flex' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
