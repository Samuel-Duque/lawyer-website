import React from 'react';
import styles from './GoogleMapEmbed.module.css';

interface GoogleMapEmbedProps {
  embedUrl: string;
  title?: string;
  width?: string;
  height?: string;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  embedUrl,
  title = 'Locatel Advocacia no Google Maps',
  width = '100%',
  height = '400px',
}) => {
  return (
    <div className={styles.mapEmbedContainer}>
      <iframe
        src={embedUrl}
        title={title}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.mapIframe}
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed; 