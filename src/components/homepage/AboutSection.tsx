import React from 'react';
import styles from './AboutSection.module.css';
import Section from '../ui/Section';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  return (
    <Section
      title="Locatel Advocacia"
      subtitle="Experiência e excelência em soluções jurídicas para proteger seus interesses"
      backgroundColor="light"
      padding="large"
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Com vasta experiência, a <strong>Locatel Advocacia</strong> se destaca 
            por oferecer assessoria jurídica personalizada e de alta qualidade, atendendo às necessidades 
            específicas de cada cliente com profissionalismo e dedicação.
          </p>
          <p>
            Nossa abordagem combina conhecimento jurídico sólido com uma visão estratégica 
            e prática, buscando sempre as soluções mais eficientes e satisfatórias para 
            cada caso, com total transparência em todas as etapas do processo.
          </p>
          <p>
            Acreditamos que uma relação de confiança é fundamental para o sucesso de nossa atuação, 
            por isso investimos no atendimento humanizado e na comunicação clara e objetiva, mantendo 
            nossos clientes informados e seguros durante todo o processo.
          </p>
          <div className={styles.values}>
            <div className={styles.value}>
              <h3>Excelência</h3>
              <p>Comprometimento com a qualidade e eficiência em todos os serviços jurídicos prestados.</p>
            </div>
            <div className={styles.value}>
              <h3>Confiança</h3>
              <p>Relações duradouras baseadas em integridade, transparência e resultados consistentes.</p>
            </div>
            <div className={styles.value}>
              <h3>Dedicação</h3>
              <p>Atenção personalizada e empenho na defesa dos interesses de cada cliente.</p>
            </div>
          </div>
          <Button to="/sobre" variant="primary">
            Conheça Nossa História
          </Button>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            {/* Placeholder for image, will be replaced by actual image later */}
            <div className={styles.placeholder}></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection; 