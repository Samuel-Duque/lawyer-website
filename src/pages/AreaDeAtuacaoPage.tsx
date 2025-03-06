import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import styles from './AreaDeAtuacaoPage.module.css';

// Define detailed practice areas data
const practiceAreasData = {
  'direito-civil': {
    title: 'Direito Civil',
    icon: 'civilIcon',
    description: 'O Direito Civil é o ramo do direito privado que regula as relações entre pessoas físicas e jurídicas. Abrange diversos aspectos da vida civil, desde contratos, responsabilidade civil, direitos reais até obrigações e sucessões.',
    services: [
      'Elaboração e análise de contratos',
      'Cobrança de dívidas e executivos',
      'Ações de indenização por danos morais e materiais',
      'Questões de responsabilidade civil',
      'Assessoria em direitos reais (posse e propriedade)',
      'Usucapião',
      'Defesas do consumidor',
      'Questões relacionadas a obrigações civis'
    ],
    benefits: [
      'Segurança jurídica em relações contratuais',
      'Proteção de direitos e interesses',
      'Resolução eficiente de conflitos',
      'Prevenção de riscos legais',
      'Orientação sobre direitos e deveres'
    ],
    approach: 'Nossa abordagem no Direito Civil prioriza a prevenção de conflitos através da elaboração cuidadosa de contratos e documentos legais. Quando o litígio é inevitável, buscamos estratégias eficientes para resolução, seja por meios alternativos como mediação e conciliação, ou através da representação judicial.',
    casesTitle: 'Casos de Sucesso em Direito Civil',
    cases: [
      {
        title: 'Resolução de Conflito Contratual',
        description: 'Representamos um cliente em uma disputa contratual complexa, utilizando mediação para resolver o conflito em apenas 45 dias, economizando tempo e recursos que seriam gastos em um processo judicial.'
      },
      {
        title: 'Indenização por Danos Morais',
        description: 'Obtivemos uma indenização significativa para nosso cliente que teve sua imagem indevidamente utilizada por uma empresa, estabelecendo um precedente importante para casos similares.'
      }
    ]
  },
  'direito-empresarial': {
    title: 'Direito Empresarial',
    icon: 'empresarialIcon',
    description: 'O Direito Empresarial, também conhecido como Direito Comercial, é o ramo jurídico que regula as atividades empresariais e comerciais. Ele abrange desde a constituição de empresas até operações societárias complexas, contratos comerciais e gestão de crises empresariais.',
    services: [
      'Constituição de empresas e elaboração de contratos sociais',
      'Assessoria em operações societárias (fusões, aquisições, cisões)',
      'Elaboração e análise de contratos comerciais',
      'Reorganização societária e planejamento sucessório empresarial',
      'Recuperação judicial e extrajudicial',
      'Due diligence legal',
      'Proteção de propriedade intelectual',
      'Conformidade legal e regulatória (compliance)'
    ],
    benefits: [
      'Segurança jurídica nas operações empresariais',
      'Redução de riscos legais e fiscais',
      'Estruturação eficiente de negócios',
      'Proteção patrimonial',
      'Suporte na expansão e desenvolvimento empresarial'
    ],
    approach: 'No Direito Empresarial, adotamos uma abordagem preventiva e estratégica, compreendendo profundamente o negócio do cliente para oferecer soluções jurídicas que contribuam para o crescimento sustentável da empresa. Nosso objetivo é não apenas resolver questões legais, mas também agregar valor aos negócios de nossos clientes.',
    casesTitle: 'Casos de Sucesso em Direito Empresarial',
    cases: [
      {
        title: 'Reestruturação Societária',
        description: 'Assessoramos uma empresa de médio porte em sua reestruturação societária, otimizando a gestão e reduzindo a carga tributária em 30%, garantindo maior competitividade no mercado.'
      },
      {
        title: 'Recuperação Empresarial',
        description: 'Conduzimos com sucesso um processo de recuperação extrajudicial para uma empresa em crise financeira, renegociando dívidas e implementando um plano de reestruturação que permitiu a continuidade das operações.'
      }
    ]
  },
  'direito-tributario': {
    title: 'Direito Tributário',
    icon: 'tributarioIcon',
    description: 'O Direito Tributário é o ramo jurídico que regula as relações entre o fisco e os contribuintes, estabelecendo normas sobre a criação, cobrança e fiscalização de tributos. Uma assessoria especializada nesta área é fundamental para empresas e indivíduos navegarem pelo complexo sistema tributário brasileiro.',
    services: [
      'Planejamento tributário para pessoas físicas e jurídicas',
      'Análise de benefícios fiscais',
      'Representação em processos administrativos fiscais',
      'Contencioso tributário judicial',
      'Recuperação de tributos pagos indevidamente',
      'Consultoria em matéria tributária',
      'Regularização de pendências fiscais',
      'Assessoria em auditorias fiscais'
    ],
    benefits: [
      'Economia tributária legal',
      'Prevenção de autuações fiscais',
      'Segurança jurídica nas operações',
      'Recuperação de créditos tributários',
      'Conformidade com a legislação fiscal'
    ],
    approach: 'Nossa atuação no Direito Tributário combina profundo conhecimento técnico com visão estratégica. Trabalhamos para identificar oportunidades legais de economia fiscal e prevenir riscos, sempre em conformidade com a legislação vigente. No contencioso, utilizamos argumentos sólidos e inovadores para defender os interesses de nossos clientes.',
    casesTitle: 'Casos de Sucesso em Direito Tributário',
    cases: [
      {
        title: 'Planejamento Tributário',
        description: 'Desenvolvemos um planejamento tributário para uma indústria, resultando em uma economia anual de aproximadamente R$ 1,2 milhão, mantendo total conformidade com a legislação vigente.'
      },
      {
        title: 'Exclusão de ICMS da Base de Cálculo do PIS/COFINS',
        description: 'Obtivemos decisão favorável para um cliente comercial, garantindo a exclusão do ICMS da base de cálculo do PIS e COFINS, com recuperação de valores pagos nos últimos 5 anos, totalizando aproximadamente R$ 800 mil.'
      }
    ]
  },
  'direito-familia': {
    title: 'Direito de Família',
    icon: 'familiaIcon',
    description: 'O Direito de Família é o ramo jurídico que regula as relações familiares e seus efeitos. Abrange questões como casamento, divórcio, guarda de filhos, pensão alimentícia, adoção e partilha de bens. Nossa abordagem nesta área sensível prioriza o diálogo e a busca por soluções que preservem os laços familiares sempre que possível.',
    services: [
      'Divórcio consensual e litigioso',
      'Dissolução de união estável',
      'Guarda de filhos e regulamentação de visitas',
      'Pensão alimentícia',
      'Inventário e partilha de bens',
      'Testamentos e planejamento sucessório',
      'Investigação de paternidade',
      'Processos de adoção'
    ],
    benefits: [
      'Soluções personalizadas para cada família',
      'Abordagem sensível e humanizada',
      'Preservação de relações, especialmente quando há filhos',
      'Proteção de interesses patrimoniais',
      'Resolução eficiente de conflitos'
    ],
    approach: 'No Direito de Família, priorizamos uma abordagem humanizada, reconhecendo a complexidade emocional envolvida nestas questões. Buscamos, sempre que possível, soluções consensuais através de mediação e conciliação, reduzindo o desgaste emocional e financeiro. Quando o litígio é inevitável, representamos nossos clientes com firmeza, mas sempre visando o melhor interesse das partes, especialmente das crianças envolvidas.',
    casesTitle: 'Casos de Sucesso em Direito de Família',
    cases: [
      {
        title: 'Mediação em Divórcio Complexo',
        description: 'Conduzimos com sucesso a mediação em um divórcio com questões patrimoniais complexas, chegando a um acordo satisfatório para ambas as partes em apenas 3 meses, evitando um processo judicial que poderia se estender por anos.'
      },
      {
        title: 'Guarda Compartilhada',
        description: 'Representamos um pai em um processo de guarda, garantindo a implementação de guarda compartilhada e preservando seu papel na vida dos filhos, com um plano de convivência equilibrado e benéfico para as crianças.'
      }
    ]
  },
  'direito-trabalhista': {
    title: 'Direito Trabalhista',
    icon: 'trabalhistaIcon',
    description: 'O Direito Trabalhista regula as relações entre empregadores e empregados, estabelecendo direitos e deveres para ambas as partes. Este ramo jurídico abrange desde a contratação até o término da relação de trabalho, incluindo questões como remuneração, jornada, benefícios e segurança no ambiente laboral.',
    services: [
      'Elaboração e revisão de contratos de trabalho',
      'Assessoria em processos de admissão e demissão',
      'Representação em reclamações trabalhistas',
      'Negociações coletivas',
      'Análise e implementação de políticas de compliance trabalhista',
      'Auditorias trabalhistas preventivas',
      'Assessoria em benefícios previdenciários',
      'Terceirização e outras formas de contratação'
    ],
    benefits: [
      'Prevenção de passivos trabalhistas',
      'Segurança jurídica nas relações de trabalho',
      'Defesa eficiente em processos trabalhistas',
      'Conformidade com a legislação e acordos coletivos',
      'Equilíbrio entre direitos dos trabalhadores e interesses empresariais'
    ],
    approach: 'Nossa atuação no Direito Trabalhista busca equilibrar o respeito aos direitos dos trabalhadores com as necessidades operacionais e financeiras das empresas. Para empregadores, focamos em estratégias preventivas e compliance; para empregados, garantimos que seus direitos sejam respeitados e compensados adequadamente quando violados.',
    casesTitle: 'Casos de Sucesso em Direito Trabalhista',
    cases: [
      {
        title: 'Implementação de Compliance Trabalhista',
        description: 'Desenvolvemos e implementamos um programa completo de compliance trabalhista para uma empresa com mais de 200 funcionários, resultando em uma redução de 70% nas reclamações trabalhistas nos dois anos seguintes.'
      },
      {
        title: 'Defesa em Reclamação Trabalhista Coletiva',
        description: 'Representamos com sucesso uma empresa em uma reclamação trabalhista coletiva, demonstrando o cumprimento da legislação e obtendo decisão favorável que evitou um impacto financeiro estimado em R$ 1,5 milhão.'
      }
    ]
  },
  'direito-imobiliario': {
    title: 'Direito Imobiliário',
    icon: 'imobiliarioIcon',
    description: 'O Direito Imobiliário é o ramo jurídico que regula as relações envolvendo bens imóveis, abrangendo compra e venda, locação, incorporação imobiliária, condomínios, regularização fundiária e outros aspectos relacionados à propriedade imobiliária.',
    services: [
      'Elaboração e análise de contratos de compra e venda',
      'Assessoria em locações residenciais e comerciais',
      'Due diligence imobiliária',
      'Regularização de imóveis',
      'Questões condominiais',
      'Assessoria em incorporações imobiliárias',
      'Usucapião e outros modos de aquisição de propriedade',
      'Planejamento imobiliário'
    ],
    benefits: [
      'Segurança jurídica em transações imobiliárias',
      'Prevenção de problemas futuros com documentação e registros',
      'Proteção de investimentos imobiliários',
      'Solução eficiente de conflitos em locações e condomínios',
      'Orientação especializada em projetos imobiliários'
    ],
    approach: 'No Direito Imobiliário, adotamos uma abordagem minuciosa e preventiva, realizando verificações detalhadas da documentação e situação legal dos imóveis para garantir segurança nas transações. Atuamos tanto na esfera consultiva, elaborando contratos sólidos, quanto no contencioso, resolvendo disputas relacionadas a imóveis.',
    casesTitle: 'Casos de Sucesso em Direito Imobiliário',
    cases: [
      {
        title: 'Regularização de Imóvel Complexo',
        description: 'Conduzimos com sucesso a regularização de um imóvel com problemas documentais de mais de 30 anos, possibilitando sua comercialização por valor de mercado, representando um ganho de aproximadamente 40% para o proprietário.'
      },
      {
        title: 'Assessoria em Projeto de Incorporação',
        description: 'Prestamos assessoria jurídica completa em um projeto de incorporação imobiliária com 120 unidades, desde a aquisição do terreno até a entrega das unidades, garantindo conformidade legal e prevenindo litígios.'
      }
    ]
  }
};

const AreaDeAtuacaoPage: React.FC = () => {
  const { area } = useParams<{ area: string }>();
  const [areaData, setAreaData] = useState<any>(null);

  useEffect(() => {
    // Check if the area exists in our data
    if (area && practiceAreasData[area as keyof typeof practiceAreasData]) {
      setAreaData(practiceAreasData[area as keyof typeof practiceAreasData]);
    }
  }, [area]);

  if (!areaData) {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h1>Área não encontrada</h1>
            <p>A área de atuação solicitada não foi encontrada.</p>
            <Link to="/areas-de-atuacao" className={styles.backButton}>
              Voltar para Áreas de Atuação
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.areaDeAtuacaoPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <h1>{areaData.title}</h1>
            <p className={styles.subtitle}>
              Conheça nossos serviços e abordagem em {areaData.title}
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overviewSection}>
          <div className={styles.container}>
            <div className={styles.overviewContent}>
              <div className={styles.areaIcon}>
                <i className={styles[areaData.icon]}></i>
              </div>
              <h2>Visão Geral</h2>
              <div className={styles.separator}></div>
              <p>{areaData.description}</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.twoColumnGrid}>
              <div className={styles.column}>
                <h2>Nossos Serviços</h2>
                <div className={styles.separator}></div>
                <ul className={styles.servicesList}>
                  {areaData.services.map((service: string, index: number) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.column}>
                <h2>Benefícios</h2>
                <div className={styles.separator}></div>
                <ul className={styles.benefitsList}>
                  {areaData.benefits.map((benefit: string, index: number) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className={styles.approachSection}>
          <div className={styles.container}>
            <div className={styles.approachContent}>
              <h2>Nossa Abordagem</h2>
              <div className={styles.separator}></div>
              <p>{areaData.approach}</p>
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className={styles.casesSection}>
          <div className={styles.container}>
            <h2>{areaData.casesTitle}</h2>
            <div className={styles.separator}></div>
            
            <div className={styles.casesGrid}>
              {areaData.cases.map((caseItem: any, index: number) => (
                <div key={index} className={styles.caseCard}>
                  <h3>{caseItem.title}</h3>
                  <p>{caseItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Precisa de Assessoria em {areaData.title}?</h2>
            <p>Entre em contato para uma consulta e descubra como podemos ajudar no seu caso específico.</p>
            <div className={styles.ctaButtons}>
              <Link to="/contato" className={styles.primaryButton}>
                Fale Conosco
              </Link>
              <Link to="/areas-de-atuacao" className={styles.secondaryButton}>
                Explorar Outras Áreas
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AreaDeAtuacaoPage; 