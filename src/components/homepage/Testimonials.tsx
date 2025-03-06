import React from 'react';
import styles from './Testimonials.module.css';
import Section from '../ui/Section';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: 'A Locatel Advocacia me ajudou a resolver uma questão trabalhista complexa de forma eficiente e profissional. Recomendo sem hesitação!',
      author: 'Maria Silva',
      position: 'Cliente desde 2020',
    },
    {
      id: 2,
      text: 'Durante todo o processo de divórcio, recebi um atendimento humanizado e personalizado. A equipe foi extremamente competente e atenciosa.',
      author: 'João Oliveira',
      position: 'Cliente desde 2019',
    },
    {
      id: 3,
      text: 'Assessoria jurídica de excelência para nossa empresa. Resolveram questões tributárias com muita competência, gerando economia significativa.',
      author: 'Empresa ABC Ltda',
      position: 'Cliente corporativo desde 2018',
    },
  ];

  return (
    <Section
      title="Depoimentos"
      subtitle="O que nossos clientes dizem sobre nossos serviços"
      backgroundColor="dark"
      padding="large"
    >
      <div className={styles.container}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.card}>
            <div className={styles.quote}>"</div>
            <p className={styles.text}>{testimonial.text}</p>
            <div className={styles.author}>
              <p className={styles.name}>{testimonial.author}</p>
              <p className={styles.position}>{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials; 