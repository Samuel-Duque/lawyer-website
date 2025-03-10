import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './SobreNosPage.module.css';
import silviaLocatelImage from '../images/adv.jpg';
const SobreNosPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.sobreNosPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <h1>Sobre Nós</h1>
            <p className={styles.subtitle}>
              Conheça melhor Silvia Locatel Advocacia e a nossa trajetória de excelência jurídica.
            </p>
          </div>
        </section>

        {/* Our History */}
        <section className={styles.historySection}>
          <div className={styles.container}>
            <div className={styles.twoColumnGrid}>
              <div className={styles.column}>
                <h2>Nossa História</h2>
                <div className={styles.separator}></div>
                <p>
                  Fundado pela Dra. Silvia Locatel, nosso escritório nasceu do desejo de oferecer 
                  serviços jurídicos de alta qualidade com um atendimento personalizado e humano, 
                  onde cada cliente recebe atenção individual às suas necessidades específicas.
                </p>
                <p>
                  Com vasta experiência no mercado jurídico, nos estabelecemos como 
                  uma referência em diversas áreas do Direito, combinando conhecimento técnico 
                  com uma abordagem estratégica para obter os melhores resultados para nossos clientes.
                </p>
                <p>
                  Nossa trajetória é marcada pelo compromisso inabalável com a ética, transparência 
                  e excelência em todos os serviços prestados, construindo relacionamentos de 
                  confiança duradouros com nossos clientes.
                </p>
              </div>
              <div className={styles.column}>
                <div className={styles.imageWrapper}>
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Escritório Silvia Locatel Advocacia" 
                    className={styles.officeImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission, Vision and Values */}
        <section className={styles.missionSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <h2>Missão, Visão e Valores</h2>
              <div className={styles.separator}></div>
            </div>
            
            <div className={styles.threeColumnGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className={styles.missionIcon}></i>
                </div>
                <h3>Missão</h3>
                <p>
                  Oferecer serviços jurídicos de excelência, com foco no cliente e em suas necessidades, 
                  promovendo soluções eficazes e personalizadas para cada caso.
                </p>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className={styles.visionIcon}></i>
                </div>
                <h3>Visão</h3>
                <p>
                  Ser reconhecido como um escritório de advocacia de referência pela qualidade de seus 
                  serviços, inovação nas soluções jurídicas e satisfação de seus clientes.
                </p>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className={styles.valuesIcon}></i>
                </div>
                <h3>Valores</h3>
                <p>
                  Ética, transparência, comprometimento, excelência técnica, 
                  atualização constante e foco na satisfação do cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <h2>Nossa Equipe</h2>
              <div className={styles.separator}></div>
              <p className={styles.sectionDescription}>
                Contamos com profissionais altamente qualificados e comprometidos com a excelência, 
                prontos para oferecer o melhor atendimento e as soluções mais adequadas para cada caso.
              </p>
            </div>
            
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.memberImageWrapper}>
                  <img 
                    src={silviaLocatelImage}
                    className={styles.memberImage}
                    alt="Dra. Silvia Locatel"
                  />
                </div>
                <h3>Dra. Silvia Locatel</h3>
                <p className={styles.memberRole}>Advogada Sócia-Fundadora</p>
                <p className={styles.memberBio}>
                  Especialista em Direito Civil e Empresarial, com vasta experiência. 
                  Formada pela Universidade Universo.
                </p>
                <div className={styles.memberSocial}>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className={styles.linkedinIcon}></i>
                  </a>
                  <a href="mailto:silvialocateladvogada@gmail.com" aria-label="Email">
                    <i className={styles.emailIcon}></i>
                  </a>
                </div>
              </div>
              
              {/* <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Dr. Carlos Mendes"
                  />
                </div>
                <h3>Dr. Carlos Mendes</h3>
                <p className={styles.memberRole}>Advogado Sênior</p>
                <p className={styles.memberBio}>
                  Especialista em Direito Tributário e Empresarial, com 10 anos de experiência. 
                  Formado pela PUC-SP, com mestrado em Direito Tributário.
                </p>
                <div className={styles.memberSocial}>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className={styles.linkedinIcon}></i>
                  </a>
                  <a href="mailto:carlos@silvialocatel.adv.br" aria-label="Email">
                    <i className={styles.emailIcon}></i>
                  </a>
                </div>
              </div>
              
              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Dra. Ana Oliveira"
                  />
                </div>
                <h3>Dra. Ana Oliveira</h3>
                <p className={styles.memberRole}>Advogada</p>
                <p className={styles.memberBio}>
                  Especialista em Direito de Família e Sucessões, com 7 anos de experiência. 
                  Formada pela UERJ, com especialização em Direito de Família.
                </p>
                <div className={styles.memberSocial}>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className={styles.linkedinIcon}></i>
                  </a>
                  <a href="mailto:ana@silvialocatel.adv.br" aria-label="Email">
                    <i className={styles.emailIcon}></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <h2>O Que Nossos Clientes Dizem</h2>
              <div className={styles.separator}></div>
            </div>
            
            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.quoteIcon}></div>
                <p className={styles.testimonialText}>
                  "A Dra. Silvia Locatel e sua equipe demonstraram um profissionalismo excepcional 
                  no tratamento do meu caso. A atenção aos detalhes e o compromisso com resultados 
                  foram impressionantes. Recomendo fortemente seus serviços."
                </p>
                <div className={styles.testimonialAuthor}>
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                    alt="Maria Silva"
                  />
                  <div>
                    <h4>Maria Silva</h4>
                    <p>Empresária</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.quoteIcon}></div>
                <p className={styles.testimonialText}>
                  "Busquei o escritório para resolver uma questão imobiliária complexa e fiquei 
                  extremamente satisfeito com o atendimento e resultado. A clareza nas explicações 
                  e o acompanhamento constante fizeram toda a diferença."
                </p>
                <div className={styles.testimonialAuthor}>
                  <img 
                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                    alt="Pedro Santos"
                  />
                  <div>
                    <h4>Pedro Santos</h4>
                    <p>Engenheiro Civil</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.quoteIcon}></div>
                <p className={styles.testimonialText}>
                  "A equipe da Silvia Locatel Advocacia conduziu meu processo trabalhista com 
                  excelência. Sempre muito atenciosos, explicaram cada etapa do processo e 
                  conseguiram um acordo muito favorável. Sou muito grata pelo trabalho realizado."
                </p>
                <div className={styles.testimonialAuthor}>
                  <img 
                    src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                    alt="Juliana Costa"
                  />
                  <div>
                    <h4>Juliana Costa</h4>
                    <p>Administradora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Precisa de Assessoria Jurídica?</h2>
            <p>Entre em contato conosco e agende uma consulta. Estamos prontos para ajudá-lo.</p>
            <div className={styles.ctaButtons}>
              <a href="/contato" className={styles.primaryButton}>Entre em Contato</a>
              <a href="/areas-de-atuacao" className={styles.secondaryButton}>Conheça Nossos Serviços</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SobreNosPage; 