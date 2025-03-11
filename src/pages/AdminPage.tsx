import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import styles from './AdminPage.module.css';
import { MOCK_POSTS } from './BlogPage';

// Interface for blog post data
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  slug: string;
  image: string;
  category: string;
  featured: boolean;
  readTime: string;
  authorImage?: string;
  authorBio?: string;
}

const AdminPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load posts from localStorage or use mock data if none exist
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      // Initialize with mock data if no posts exist
      localStorage.setItem('blogPosts', JSON.stringify(MOCK_POSTS));
      setPosts(MOCK_POSTS as BlogPost[]);
    }
    setIsLoading(false);
  }, []);

  const handleDeletePost = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este artigo?')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    }
  };

  const handleToggleFeatured = (id: number) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        return { ...post, featured: !post.featured };
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  if (isLoading) {
    return (
      <Layout>
        <Section backgroundColor="light" padding="large">
          <div className={styles.loading}>Carregando...</div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.adminHeader}>
        <div className={styles.headerContent}>
          <h1>Gerenciamento de Conteúdo</h1>
          <p>Administre os artigos do blog</p>
        </div>
      </div>

      <Section backgroundColor="light" padding="large">
        <div className={styles.adminContainer}>
          <div className={styles.adminActions}>
            <Button to="/admin/post/new" variant="primary">
              Novo Artigo
            </Button>
          </div>

          <div className={styles.postsTable}>
            <h2>Artigos Publicados</h2>
            
            {posts.length === 0 ? (
              <div className={styles.noPosts}>
                Nenhum artigo encontrado. Crie um novo artigo para começar.
              </div>
            ) : (
              <div className={styles.tableWrapper}>
                <table>
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Categoria</th>
                      <th>Data</th>
                      <th>Destaque</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map(post => (
                      <tr key={post.id}>
                        <td>{post.title}</td>
                        <td>{post.category}</td>
                        <td>{post.date}</td>
                        <td>
                          <button 
                            className={`${styles.featuredToggle} ${post.featured ? styles.featured : ''}`}
                            onClick={() => handleToggleFeatured(post.id)}
                          >
                            {post.featured ? '★' : '☆'}
                          </button>
                        </td>
                        <td className={styles.actions}>
                          <Link to={`/admin/post/edit/${post.id}`} className={styles.editButton}>
                            Editar
                          </Link>
                          <button 
                            className={styles.deleteButton}
                            onClick={() => handleDeletePost(post.id)}
                          >
                            Excluir
                          </button>
                          <Link to={`/blog/${post.slug}`} className={styles.viewButton} target="_blank">
                            Visualizar
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default AdminPage; 