import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import styles from './BlogPage.module.css';

// Mock data for blog categories
const CATEGORIES = [
  { id: 1, name: 'Direito Civil', slug: 'direito-civil' },
  { id: 2, name: 'Direito Familiar', slug: 'direito-familiar' },
  { id: 3, name: 'Direito Trabalhista', slug: 'direito-trabalhista' },
  { id: 4, name: 'Direito Empresarial', slug: 'direito-empresarial' },
  { id: 5, name: 'Direito Tributário', slug: 'direito-tributario' },
  { id: 6, name: 'Direito Imobiliário', slug: 'direito-imobiliario' },
];

// Mock data for blog posts
const MOCK_POSTS = [
  {
    id: 1,
    title: 'Mudanças na Lei Trabalhista: O que você precisa saber',
    excerpt: 'Conheça as principais alterações na legislação trabalhista e como elas podem afetar seus direitos e obrigações.',
    date: '15 de Março de 2023',
    author: 'Dra. Ana Locatel',
    slug: 'mudancas-lei-trabalhista',
    image: '/images/blog/trabalhista.jpg',
    category: 'Direito Trabalhista',
    featured: true,
    readTime: '7 min',
  },
  {
    id: 2,
    title: 'Direito de Família: Guarda Compartilhada x Guarda Unilateral',
    excerpt: 'Entenda as diferenças entre os tipos de guarda e qual a melhor opção para o bem-estar dos filhos após a separação.',
    date: '28 de Fevereiro de 2023',
    author: 'Dr. Carlos Mendes',
    slug: 'guarda-compartilhada-unilateral',
    image: '/images/blog/familia.jpg',
    category: 'Direito Familiar',
    featured: true,
    readTime: '5 min',
  },
  {
    id: 3,
    title: 'Como proteger seu patrimônio: Planejamento sucessório',
    excerpt: 'Saiba como o planejamento sucessório pode ajudar a proteger seu patrimônio e garantir a tranquilidade de sua família.',
    date: '10 de Fevereiro de 2023',
    author: 'Dra. Ana Locatel',
    slug: 'planejamento-sucessorio',
    image: '/images/blog/patrimonio.jpg',
    category: 'Direito Civil',
    featured: false,
    readTime: '8 min',
  },
  {
    id: 4,
    title: 'Direitos do Consumidor: O que fazer quando um produto apresenta defeito',
    excerpt: 'Conheça seus direitos como consumidor e saiba como proceder quando um produto apresenta problemas.',
    date: '25 de Janeiro de 2023',
    author: 'Dr. Paulo Silveira',
    slug: 'direitos-consumidor-produtos-defeito',
    image: '/images/blog/consumidor.jpg',
    category: 'Direito Civil',
    featured: false,
    readTime: '6 min',
  },
  {
    id: 5,
    title: 'Reforma Tributária: Impactos para Empresas e Pessoas Físicas',
    excerpt: 'Análise detalhada sobre os impactos da reforma tributária e como se preparar para as mudanças.',
    date: '5 de Janeiro de 2023',
    author: 'Dr. Marcos Pereira',
    slug: 'reforma-tributaria-impactos',
    image: '/images/blog/tributario.jpg',
    category: 'Direito Tributário',
    featured: false,
    readTime: '10 min',
  },
  {
    id: 6,
    title: 'Contratos de Locação Comercial: Cláusulas Essenciais',
    excerpt: 'Guia completo sobre as cláusulas essenciais que devem estar presentes em contratos de locação comercial.',
    date: '18 de Dezembro de 2022',
    author: 'Dra. Ana Locatel',
    slug: 'contratos-locacao-comercial',
    image: '/images/blog/imobiliario.jpg',
    category: 'Direito Imobiliário',
    featured: false,
    readTime: '9 min',
  },
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [posts, setPosts] = useState(MOCK_POSTS);
  const [visiblePosts, setVisiblePosts] = useState(MOCK_POSTS);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Filter posts based on search term and active category
  useEffect(() => {
    let filtered = MOCK_POSTS;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    setVisiblePosts(filtered);
  }, [searchTerm, activeCategory]);

  // Featured posts
  const featuredPosts = MOCK_POSTS.filter(post => post.featured);

  return (
    <Layout>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Blog Jurídico</h1>
          <p>Artigos, notícias e informações relevantes sobre o mundo jurídico</p>
        </div>
      </div>

      <Section backgroundColor="light" padding="large">
        <div className={styles.blogContent}>
          <div className={styles.sidebarContainer}>
            <div className={styles.sidebar}>
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  className={`${styles.searchInput} ${isSearchFocused ? styles.searchInputFocused : ''}`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <span className={styles.searchIcon}>🔍</span>
              </div>
              
              <div className={styles.categoriesContainer}>
                <h3>Categorias</h3>
                <ul className={styles.categoriesList}>
                  <li 
                    className={activeCategory === null ? styles.activeCategory : ''}
                    onClick={() => setActiveCategory(null)}
                  >
                    Todos
                  </li>
                  {CATEGORIES.map(category => (
                    <li 
                      key={category.id}
                      className={activeCategory === category.name ? styles.activeCategory : ''}
                      onClick={() => setActiveCategory(category.name)}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.mainContent}>
            {activeCategory === null && searchTerm === '' && (
              <div className={styles.featuredPosts}>
                <h2>Artigos em Destaque</h2>
                <div className={styles.featuredGrid}>
                  {featuredPosts.map(post => {
                    const backgroundStyle: React.CSSProperties = {
                      backgroundColor: '#f5f5f5'
                    };
                    
                    // Only add backgroundImage if we're not in development mode
                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
                      backgroundStyle.backgroundImage = `url(${post.image})`;
                    }
                    
                    return (
                      <div key={post.id} className={styles.featuredCard}>
                        <div 
                          className={styles.featuredImage} 
                          style={backgroundStyle}
                        >
                          <div className={styles.featuredCategory}>{post.category}</div>
                          <div className={styles.imagePlaceholder} style={{ opacity: 1 }}>
                            <span className={styles.categoryIcon}>
                              {post.category === 'Direito Trabalhista' && '👷‍♂️'}
                              {post.category === 'Direito Familiar' && '👨‍👩‍👧‍👦'}
                              {post.category === 'Direito Civil' && '📝'}
                              {post.category === 'Direito Empresarial' && '🏢'}
                              {post.category === 'Direito Tributário' && '💰'}
                              {post.category === 'Direito Imobiliário' && '🏠'}
                            </span>
                          </div>
                        </div>
                        <div className={styles.featuredContent}>
                          <h3>{post.title}</h3>
                          <p>{post.excerpt}</p>
                          <div className={styles.postMeta}>
                            <span className={styles.postAuthor}>{post.author}</span>
                            <div className={styles.postDetails}>
                              <span className={styles.postDate}>{post.date}</span>
                              <span className={styles.postReadTime}>{post.readTime} de leitura</span>
                            </div>
                          </div>
                          <a href={`/blog/${post.slug}`} className={styles.readMore}>Ler artigo completo →</a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            <div className={styles.allPosts}>
              {activeCategory !== null && <h2>{activeCategory}</h2>}
              {searchTerm !== '' && <h2>Resultados da Busca</h2>}
              {activeCategory === null && searchTerm === '' && <h2>Artigos Recentes</h2>}
              
              {visiblePosts.length > 0 ? (
                <div className={styles.postsGrid}>
                  {visiblePosts.map(post => (
                    <div key={post.id} className={styles.postCard}>
                      <Card
                        title={post.title}
                        content={post.excerpt}
                        image={post.image}
                        fallbackImage="/images/blog/placeholder-blog.jpg"
                        imageAlt={post.title}
                        linkTo={`/blog/${post.slug}`}
                        linkText="Ler artigo"
                        category={post.category}
                      >
                        <div className={styles.postMeta}>
                          <span className={styles.postCategory}>{post.category}</span>
                          <div className={styles.postDetails}>
                            <span className={styles.postDate}>{post.date}</span>
                            <span className={styles.postReadTime}>{post.readTime} de leitura</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <p>Nenhum artigo encontrado para sua busca.</p>
                  <button 
                    className={styles.resetButton}
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory(null);
                    }}
                  >
                    Limpar Filtros
                  </button>
                </div>
              )}
            </div>
            
            <div className={styles.newsletterContainer}>
              <div className={styles.newsletterContent}>
                <h3>Inscreva-se em Nossa Newsletter</h3>
                <p>Receba atualizações sobre novos artigos e notícias do mundo jurídico.</p>
                <div className={styles.newsletterForm}>
                  <input type="email" placeholder="Seu endereço de email" className={styles.emailInput} />
                  <button className={styles.subscribeButton}>Inscrever</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPage;