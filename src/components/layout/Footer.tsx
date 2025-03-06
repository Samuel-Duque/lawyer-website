import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <div className={styles.logo}>
                <h2>Locatel Advocacia</h2>
                <span className={styles.tagline}>Advocacia Especializada</span>
              </div>
              <p className={styles.description}>
                Prestando serviços jurídicos de excelência com dedicação, ética 
                e compromisso para proteger seus direitos e interesses.
              </p>
              <div className={styles.social}>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className={styles.linkedinIcon}></i>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className={styles.instagramIcon}></i>
                </a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className={styles.facebookIcon}></i>
                </a>
              </div>
            </div>
            
            <div className={styles.footerColumn}>
              <h3>Links Úteis</h3>
              <ul className={styles.footerLinks}>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Sobre Nós</Link></li>
                <li><Link to="/areas-de-atuacao">Áreas de Atuação</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h3>Áreas de Atuação</h3>
              <ul className={styles.footerLinks}>
                <li><Link to="/areas-de-atuacao/direito-civil">Direito Civil</Link></li>
                <li><Link to="/areas-de-atuacao/direito-empresarial">Direito Empresarial</Link></li>
                <li><Link to="/areas-de-atuacao/direito-tributario">Direito Tributário</Link></li>
                <li><Link to="/areas-de-atuacao/direito-familia">Direito de Família</Link></li>
                <li><Link to="/areas-de-atuacao/direito-trabalhista">Direito Trabalhista</Link></li>
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h3>Contato</h3>
              <address className={styles.contactInfo}>
                <p>
                  <i className={styles.locationIcon}></i>
                  Av. Paulista, 1000, Sala 101<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </p>
                <p>
                  <i className={styles.phoneIcon}></i>
                  <a href="tel:+5500000000000">(00) 00000-0000</a>
                </p>
                <p>
                  <i className={styles.emailIcon}></i>
                  <a href="mailto:contato@silvialocatel.adv.br">contato@silvialocatel.adv.br</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            &copy; {currentYear} Locatel Advocacia. Todos os direitos reservados.
          </p>
          <div className={styles.legalLinks}>
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
            <span className={styles.divider}>|</span>
            <Link to="/termos-de-uso">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 