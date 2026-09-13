import { personalInfo } from '../data/portfolio';
import '../styles/sections.css';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer" style={{ padding: '60px 0', borderTop: '1px solid var(--rose-pink-border)', background: 'var(--bg-cream)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--burgundy)', marginBottom: '8px' }}>
              {personalInfo.name}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>
              {personalInfo.title}
            </p>
          </div>
          
          <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                style={{ color: 'var(--burgundy)', fontWeight: '600', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.target.style.color = 'var(--rose-pink)'}
                onMouseOut={(e) => e.target.style.color = 'var(--burgundy)'}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div style={{ color: 'var(--text-soft)', fontSize: '0.9rem', marginTop: '32px' }}>
            &copy; {year} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
