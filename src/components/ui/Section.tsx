import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  backgroundColor?: 'light' | 'dark' | 'primary' | 'none';
  padding?: 'small' | 'medium' | 'large' | 'none';
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  backgroundColor = 'light',
  padding = 'medium',
  className = '',
}) => {
  return (
    <section className={`${styles.section} ${styles[backgroundColor]} ${styles[`padding-${padding}`]} ${className}`}>
      <div className={styles.container}>
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section; 