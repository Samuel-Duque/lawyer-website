import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`
      ${styles.header} 
      ${isHomePage && !isScrolled ? styles.transparent : ''} 
      ${isScrolled ? styles.scrolled : ''}
    `}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>Locatel Advocacia</h1>
            <span className={styles.tagline}>Advocacia Especializada</span>
          </Link>
        </div>
        
        <button 
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.open : ''}`}>
          <ul>
            <li className={location.pathname === '/' ? styles.active : ''}>
              <Link to="/">Início</Link>
            </li>
            <li className={location.pathname === '/sobre' ? styles.active : ''}>
              <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li className={location.pathname.includes('/areas-de-atuacao') ? styles.active : ''}>
              <Link to="/areas-de-atuacao">Áreas de Atuação</Link>
            </li>
            <li className={location.pathname.includes('/blog') ? styles.active : ''}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={location.pathname === '/contato' ? styles.active : ''}>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
        
        <div className={styles.contactInfo}>
          <a href="tel:+5500000000000" className={styles.phone}>
            <i className={styles.phoneIcon}></i>
            (00) 00000-0000
          </a>
          <a href="mailto:contato@silvialocatel.adv.br" className={styles.email}>
            contato@silvialocatel.adv.br
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 