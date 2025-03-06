import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/homepage/Hero';
import AboutSection from '../components/homepage/AboutSection';
import PracticeAreas from '../components/homepage/PracticeAreas';
import Testimonials from '../components/homepage/Testimonials';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      
      <div className={styles.fadeInUp}>
        <AboutSection />
      </div>
      
      <div className={styles.fadeIn}>
        <PracticeAreas />
      </div>
      
      <div className={styles.fadeInUp}>
        <Testimonials />
      </div>
      
      {/* Contact CTA Section */}
      <div className={styles.fadeIn}>
        <Section
          backgroundColor="primary"
          padding="large"
          title="Precisa de Assessoria Jurídica?"
          subtitle="Entre em contato com Silvia Locatel para uma consulta inicial e descubra como podemos ajudar no seu caso."
        >
          <div className={styles.contactCta}>
            <Button to="/contato" size="large">
              Agende uma Consulta
            </Button>
          </div>
        </Section>
      </div>
      
      {/* Blog Preview Section - Will be implemented later */}
      <div className={styles.fadeInUp}>
        <Section
          backgroundColor="light"
          padding="large"
          title="Blog Jurídico"
          subtitle="Fique por dentro das novidades e informações relevantes do mundo jurídico"
        >
          <div className={styles.blogPreview}>
            <p className={styles.comingSoon}>
              Em breve, aqui você encontrará artigos e notícias sobre temas jurídicos relevantes, 
              escritos por Silvia Locatel e sua equipe de especialistas.
            </p>
            <Button to="/blog" variant="outlined">
              Visitar o Blog
            </Button>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default HomePage; 