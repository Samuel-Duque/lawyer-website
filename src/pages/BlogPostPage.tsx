import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import styles from './BlogPostPage.module.css';
import { MOCK_POSTS } from './BlogPage';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<typeof MOCK_POSTS[0] | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Load posts from localStorage or use mock data
    const storedPosts = localStorage.getItem('blogPosts');
    const posts = storedPosts ? JSON.parse(storedPosts) : MOCK_POSTS;
    
    // Find the post by slug
    const foundPost = posts.find((p: typeof MOCK_POSTS[0]) => p.slug === slug);
    setPost(foundPost || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <Section backgroundColor="light" padding="large">
          <div className={styles.loading}>Carregando...</div>
        </Section>
      </Layout>
    );
  }

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
            <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content || '' }}></div>
            
            <div className={styles.author}>
              <div className={styles.authorImage}>
                {(post as any).authorImage ? (
                  <img src={(post as any).authorImage} alt={post.author} />
                ) : (
                  <div className={styles.authorPlaceholder}></div>
                )}
              </div>
              <div className={styles.authorInfo}>
                <h3>{post.author}</h3>
                <p>{(post as any).authorBio || 'Advogada especialista, com ampla experiência em Direito.'}</p>
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