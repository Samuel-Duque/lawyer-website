import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import styles from './BlogPostPage.module.css';

// Mock data for a blog post
const MOCK_POST = {
  id: 1,
  title: 'Mudanças na Lei Trabalhista: O que você precisa saber',
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    
    <h2>Principais alterações</h2>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    
    <h2>Como isso afeta você</h2>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    
    <ul>
      <li>Item 1: Lorem ipsum dolor sit amet</li>
      <li>Item 2: Consectetur adipiscing elit</li>
      <li>Item 3: Sed euismod, nisl vel ultricies lacinia</li>
    </ul>
    
    <h2>Conclusão</h2>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
  `,
  date: '15 de Março de 2023',
  author: 'Dra. Silvia Locatel',
  slug: 'mudancas-lei-trabalhista',
  image: '/public/post1.jpeg',
  authorImage: '/images/team/ana-locatel.jpg',
  authorBio: 'Advogada especialista em Direito Trabalhista, com mais de 10 anos de experiência.',
};

const BlogPostPage: React.FC = () => {
  // const { slug } = useParams<{ slug: string }>();
  
  // In a real application, you would fetch the post based on the slug
  // For now, we'll just use our mock data
  const post = MOCK_POST;

  if (!post) {
    return (
      <Layout>
        <Section backgroundColor="light" padding="large">
          <div className={styles.notFound}>
            <h2>Artigo não encontrado</h2>
            <p>O artigo que você está procurando não existe ou foi removido.</p>
            <Button to="/blog" variant="primary">
              Voltar para o Blog
            </Button>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className={styles.article}>
        <div className={styles.hero}>
          <div className={styles.overlay}></div>
          <div className={styles.container}>
            <div className={styles.meta}>
              <span className={styles.date}>{post.date}</span>
              <h1 className={styles.title}>{post.title}</h1>
            </div>
          </div>
        </div>

        <Section backgroundColor="light" padding="large">
          <div className={styles.content}>
            <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }}></div>
            
            <div className={styles.author}>
              <div className={styles.authorImage}>
                {post.authorImage ? (
                  <img src={post.authorImage} alt={post.author} />
                ) : (
                  <div className={styles.authorPlaceholder}></div>
                )}
              </div>
              <div className={styles.authorInfo}>
                <h3>{post.author}</h3>
                <p>{post.authorBio}</p>
              </div>
            </div>
            
            <div className={styles.navigation}>
              <Link to="/blog" className={styles.backLink}>
                ← Voltar para o Blog
              </Link>
            </div>
          </div>
        </Section>
      </article>
    </Layout>
  );
};

export default BlogPostPage; 