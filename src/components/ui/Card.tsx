import React, { useState } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  content?: string;
  image?: string;
  imageAlt?: string;
  fallbackImage?: string;
  linkTo?: string;
  linkText?: string;
  externalLink?: string;
  className?: string;
  category?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  imageAlt = 'Card image',
  fallbackImage,
  linkTo,
  linkText = 'Saiba mais',
  externalLink,
  className = '',
  category,
  children,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Get category icon based on category name
  const getCategoryIcon = (category?: string) => {
    if (!category) return '📄';
    
    switch(category) {
      case 'Direito Trabalhista':
        return '👷‍♂️';
      case 'Direito Familiar':
        return '👨‍👩‍👧‍👦';
      case 'Direito Civil':
        return '📝';
      case 'Direito Empresarial':
        return '🏢';
      case 'Direito Tributário':
        return '💰';
      case 'Direito Imobiliário':
        return '🏠';
      default:
        return '⚖️';
    }
  };

  return (
    <div className={`${styles.card} ${className}`}>
      {image ? (
        <div className={styles.imageContainer}>
          {imageError ? (
            <div className={styles.imagePlaceholder}>
              <span className={styles.categoryIcon}>
                {getCategoryIcon(category)}
              </span>
            </div>
          ) : (
            <img 
              src={image} 
              alt={imageAlt} 
              className={styles.image} 
              onError={handleImageError}
            />
          )}
        </div>
      ) : (
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <span className={styles.categoryIcon}>
              {getCategoryIcon(category)}
            </span>
          </div>
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {content && <p className={styles.text}>{content}</p>}
        {children}
        {(linkTo || externalLink) && (
          <div className={styles.action}>
            {linkTo && (
              <Link to={linkTo} className={styles.link}>
                {linkText}
              </Link>
            )}
            {externalLink && (
              <a href={externalLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {linkText}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card; 