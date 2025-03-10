import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import styles from './AreasDeAtuacaoPage.module.css';

// Define practice areas data
const practiceAreas = [
  {
    id: 'direito-civil',
    title: 'Direito Civil',
    icon: 'civilIcon',
    shortDescription: 'Assessoria jurídica completa em questões contratuais, responsabilidade civil, direitos reais e obrigações.',
    caseTypes: ['Contratos', 'Responsabilidade Civil', 'Direitos Reais', 'Obrigações'],
  },
  {
    id: 'direito-empresarial',
    title: 'Direito Empresarial',
    icon: 'empresarialIcon',
    shortDescription: 'Suporte jurídico para empresas de todos os portes, desde a constituição até operações societárias complexas.',
    caseTypes: ['Societário', 'Contratos Comerciais', 'Recuperação de Empresas', 'Due Diligence'],
  },
  {
    id: 'direito-tributario',
    title: 'Direito Tributário',
    icon: 'tributarioIcon',
    shortDescription: 'Consultoria e defesa em questões fiscais, planejamento tributário e contencioso administrativo e judicial.',
    caseTypes: ['Planejamento Tributário', 'Contencioso Fiscal', 'Benefícios Fiscais', 'Regularização Tributária'],
  },
  {
    id: 'direito-familia',
    title: 'Direito de Família',
    icon: 'familiaIcon',
    shortDescription: 'Orientação em divórcios, guarda de filhos, pensão alimentícia e partilha de bens, sempre com sensibilidade.',
    caseTypes: ['Divórcio', 'Pensão Alimentícia', 'Guarda de Filhos', 'Inventário e Partilha'],
  },
  {
    id: 'direito-trabalhista',
    title: 'Direito Trabalhista',
    icon: 'trabalhistaIcon',
    shortDescription: 'Assessoria jurídica para empregadores e empregados em questões laborais e previdenciárias.',
    caseTypes: ['Reclamações Trabalhistas', 'Compliance Trabalhista', 'Acordos Coletivos', 'Benefícios Previdenciários'],
  },
  {
    id: 'direito-imobiliario',
    title: 'Direito Imobiliário',
    icon: 'imobiliarioIcon',
    shortDescription: 'Suporte jurídico em transações imobiliárias, locações, condomínios e regularização de imóveis.',
    caseTypes: ['Contratos Imobiliários', 'Locações', 'Condomínios', 'Regularização de Imóveis'],
  },
];

const AreasDeAtuacaoPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.areasDeAtuacaoPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <h1>Áreas de Atuação</h1>
            <p className={styles.subtitle}>
              Conheça as áreas em que a Locatel Advocacia pode ajudar você 
              ou sua empresa com soluções jurídicas personalizadas e eficientes.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introContent}>
              <h2>Nossa Expertise</h2>
              <div className={styles.separator}></div>
              <p>
                Na Locatel Advocacia, oferecemos serviços jurídicos de excelência em diversas 
                áreas do direito. Nossa equipe de advogados especializados está preparada para 
                atender tanto pessoas físicas quanto jurídicas, sempre buscando as melhores 
                soluções para cada caso específico.
              </p>
              <p>
                Trabalhamos com foco na prevenção de conflitos e, quando necessário, na resolução 
                eficiente de litígios, seja pela via judicial ou através de métodos alternativos 
                como mediação e arbitragem.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className={styles.practiceAreasSection}>
          <div className={styles.container}>
            <div className={styles.areasGrid}>
              {practiceAreas.map((area) => (
                <div key={area.id} className={styles.areaCard}>
                  <div className={styles.areaIcon}>
                    <i className={styles[area.icon]}></i>
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.shortDescription}</p>
                  <ul className={styles.caseTypes}>
                    {area.caseTypes.map((caseType, index) => (
                      <li key={index}>{caseType}</li>
                    ))}
                  </ul>
                  <Link to={`/areas-de-atuacao/${area.id}`} className={styles.learnMoreButton}>
                    Saiba Mais
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.whyChooseUsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <h2>Por Que Escolher a Silvia Locatel Advocacia</h2>
              <div className={styles.separator}></div>
            </div>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className={styles.experienceIcon}></i>
                </div>
                <h3>Experiência</h3>
                <p>
                  Vasta experiência em atuação no mercado jurídico, com um histórico 
                  comprovado de casos bem-sucedidos em diversas áreas do direito.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className={styles.expertiseIcon}></i>
                </div>
                <h3>Especialização</h3>
                <p>
                  Equipe de advogados especializados em suas respectivas áreas, 
                  garantindo um atendimento técnico e atualizado.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className={styles.personalizedIcon}></i>
                </div>
                <h3>Atendimento Personalizado</h3>
                <p>
                  Dedicamos tempo para entender as necessidades específicas de cada 
                  cliente, oferecendo soluções sob medida.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className={styles.transparencyIcon}></i>
                </div>
                <h3>Transparência</h3>
                <p>
                  Comunicação clara e honesta em todas as etapas do processo, 
                  mantendo o cliente sempre informado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <section className={styles.successCasesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <h2>Histórias de Sucesso</h2>
              <div className={styles.separator}></div>
            </div>
            
            <div className={styles.casesSlider}>
              <div className={styles.caseCard}>
                <div className={styles.caseCategory}>Direito Empresarial</div>
                <h3>Reestruturação Societária</h3>
                <p>
                  Assessoramos uma empresa de médio porte em sua reestruturação societária, 
                  otimizando a gestão e reduzindo a carga tributária em 30%, garantindo 
                  maior competitividade no mercado.
                </p>
              </div>
              
              <div className={styles.caseCard}>
                <div className={styles.caseCategory}>Direito Civil</div>
                <h3>Resolução de Conflito Contratual</h3>
                <p>
                  Representamos um cliente em uma disputa contratual complexa, utilizando 
                  mediação para resolver o conflito em apenas 45 dias, economizando tempo 
                  e recursos que seriam gastos em um processo judicial.
                </p>
              </div>
              
              <div className={styles.caseCard}>
                <div className={styles.caseCategory}>Direito Tributário</div>
                <h3>Planejamento Tributário</h3>
                <p>
                  Desenvolvemos um planejamento tributário para uma indústria, resultando 
                  em uma economia anual de aproximadamente R$ 1,2 milhão, mantendo total 
                  conformidade com a legislação vigente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Conte com a Nossa Experiência</h2>
            <p>
              Marque uma consulta e conheça como podemos ajudar você ou sua empresa 
              a resolver questões jurídicas com eficiência e segurança.
            </p>
            <Link to="/contato" className={styles.ctaButton}>
              Agende uma Consulta
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AreasDeAtuacaoPage; 