import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay to ensure animation starts after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.goldAccent}></div>
      <div className={`${styles.decorativeElement} ${isVisible ? styles.visible : ''}`}></div>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.preTitle}>Locatel Advocacia</span>
          <h1 className={styles.title}>Advocacia de Excelência</h1>
          <p className={styles.subtitle}>
            Assessoria jurídica especializada com ética,
            dedicação e um compromisso inabalável com seus interesses e direitos.
          </p>
          <div className={styles.actions}>
            <Button to="/contato" size="large" className={styles.primaryAction}>
              Agende uma Consulta
            </Button>
            <Button to="/areas-de-atuacao" variant="secondary" size="large" className={styles.secondaryAction}>
              Nossas Áreas de Atuação
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Deslize para baixo</span>
        <span className={styles.scrollArrow}></span>
      </div>
    </section>
  );
};

export default Hero; 