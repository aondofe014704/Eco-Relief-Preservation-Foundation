import { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Home',
    'About Us',
    'Our Work',
    'Impact',
    'Get Involved',
    'Transparency',
    'News & Updates',
    'Contact Us'
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo" onClick={() => onNavigate('Home')}>
          <div className="logo-icon">🌍🌿</div>
          <div className="logo-text">
            <span className="logo-name">ERPF</span>
            <span className="logo-subtitle">Eco Relief Preservation Foundation</span>
          </div>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={currentPage === item ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item);
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button 
              className="donate-btn"
              onClick={() => {
                onNavigate('Donate');
                setIsMenuOpen(false);
              }}
            >
              Donate Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
