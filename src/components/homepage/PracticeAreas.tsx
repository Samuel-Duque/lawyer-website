import React from 'react';
import styles from './PracticeAreas.module.css';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const PracticeAreas: React.FC = () => {
  const practiceAreas = [
    {
      id: 1,
      title: 'Direito Civil',
      content: 'Atuamos em diversos aspectos do Direito Civil, incluindo contratos, responsabilidade civil, direitos reais e obrigações.',
      icon: '⚖️',
      link: '/areas-de-atuacao/direito-civil',
    },
    {
      id: 2,
      title: 'Direito Familiar',
      content: 'Assessoria em divórcios, guarda de filhos, pensão alimentícia, inventários e outros assuntos relacionados ao Direito de Família.',
      icon: '👨‍👩‍👧‍👦',
      link: '/areas-de-atuacao/direito-familiar',

    },
    {
      id: 3,
      title: 'Direito Trabalhista',
      content: 'Representação tanto de empregados quanto de empregadores em questões relacionadas às relações de trabalho.',
      icon: '👷‍♂️',
      link: '/areas-de-atuacao/direito-trabalhista',

    },
    {
      id: 4,
      title: 'Direito Empresarial',
      content: 'Suporte jurídico para empresas em formação, contratos comerciais, proteção de marcas e resolução de conflitos empresariais.',
      icon: '🏢',
      link: '/areas-de-atuacao/direito-empresarial',

    },
    {
      id: 5,
      title: 'Direito Tributário',
      content: 'Assistência em questões fiscais, planejamento tributário, defesas administrativas e judiciais em matéria fiscal.',
      icon: '📊',
      link: '/areas-de-atuacao/direito-tributario',

    },
    {
      id: 6,
      title: 'Direito Imobiliário',
      content: 'Assessoria em compra e venda de imóveis, locações, usucapião, incorporações e questões condominiais.',
      icon: '🏠',
      link: '/areas-de-atuacao/direito-imobiliario',

    },
  ];

  return (
    <Section
      title="Áreas de Atuação"
      subtitle="Conheça as principais áreas em que oferecemos nossos serviços jurídicos"
      backgroundColor="primary"
      padding="large"
    >
      <div className={styles.areas}>
        {practiceAreas.map((area) => (
          <div key={area.id} className={styles.areaItem}>
            <Card
              title={area.title}
              content={area.content}
              linkTo={area.link}
              linkText="Ver detalhes"
            >
              <div className={styles.icon}>{area.icon}</div>
            </Card>
          </div>
        ))}
      </div>
      <div className={styles.action}>
        <Button to="/areas-de-atuacao" variant="secondary">
          Ver Todas as Áreas de Atuação
        </Button>
      </div>
    </Section>
  );
};

export default PracticeAreas;
