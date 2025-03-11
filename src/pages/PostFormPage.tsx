import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import styles from './AdminPage.module.css';
import { BlogPost } from './AdminPage';
import { MOCK_POSTS } from './BlogPage';

// Mock data for blog categories
const CATEGORIES = [
  { id: 1, name: 'Direito Civil', slug: 'direito-civil' },
  { id: 2, name: 'Direito Familiar', slug: 'direito-familiar' },
  { id: 3, name: 'Direito Trabalhista', slug: 'direito-trabalhista' },
  { id: 4, name: 'Direito Empresarial', slug: 'direito-empresarial' },
  { id: 5, name: 'Direito Tributário', slug: 'direito-tributario' },
  { id: 6, name: 'Direito Imobiliário', slug: 'direito-imobiliario' },
];

// Helper function to format date
const formatDate = (date: Date): string => {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} de ${month} de ${year}`;
};

const PostFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNewPost = !id || id === 'new';
  
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    category: CATEGORIES[0].name,
    author: 'Dra. Silvia Locatel', // Default author
    featured: false,
    readTime: '5 min',
    date: formatDate(new Date()),
    image: '',
    slug: '',
    id: 0
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    // If editing an existing post, load the post data
    if (!isNewPost) {
      const storedPosts = localStorage.getItem('blogPosts');
      let posts = storedPosts ? JSON.parse(storedPosts) : MOCK_POSTS;
      
      const postToEdit = posts.find((post: BlogPost) => post.id === Number(id));
      if (postToEdit) {
        setFormData(postToEdit);
      } else {
        navigate('/admin');
      }
    }
  }, [id, isNewPost, navigate]);
  
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[áàãâä]/g, 'a')
      .replace(/[éèêë]/g, 'e')
      .replace(/[íìîï]/g, 'i')
      .replace(/[óòõôö]/g, 'o')
      .replace(/[úùûü]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // If title is changing, also update the slug
    if (name === 'title') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        slug: generateSlug(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.title?.trim()) {
      newErrors.title = 'O título é obrigatório';
    }
    
    if (!formData.excerpt?.trim()) {
      newErrors.excerpt = 'A descrição é obrigatória';
    }
    
    if (!formData.content?.trim()) {
      newErrors.content = 'O conteúdo é obrigatório';
    }
    
    if (!formData.category) {
      newErrors.category = 'A categoria é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || isSubmitting) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Get current posts from localStorage
    const storedPosts = localStorage.getItem('blogPosts');
    let posts = storedPosts ? JSON.parse(storedPosts) : MOCK_POSTS;
    
    if (isNewPost) {
      // Create new post
      const newId = Math.max(0, ...posts.map((post: BlogPost) => post.id)) + 1;
      const newPost = {
        ...formData,
        id: newId,
        date: formData.date || formatDate(new Date())
      };
      posts = [newPost, ...posts];
    } else {
      // Update existing post
      posts = posts.map((post: BlogPost) => 
        post.id === Number(id) ? { ...post, ...formData } : post
      );
    }
    
    // Save updated posts to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    
    // Redirect back to admin page
    setIsSubmitting(false);
    navigate('/admin');
  };
  
  return (
    <Layout>
      <div className={styles.adminHeader}>
        <div className={styles.headerContent}>
          <h1>{isNewPost ? 'Novo Artigo' : 'Editar Artigo'}</h1>
          <p>Gerenciamento de conteúdo do blog</p>
        </div>
      </div>

      <Section backgroundColor="light" padding="large">
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                className={styles.formControl}
                value={formData.title}
                onChange={handleInputChange}
              />
              {errors.title && <div className={styles.formError}>{errors.title}</div>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="slug">Slug</label>
              <input
                type="text"
                id="slug"
                name="slug"
                className={styles.formControl}
                value={formData.slug}
                onChange={handleInputChange}
                placeholder="Generated from title"
                disabled
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="excerpt">Descrição curta</label>
              <textarea
                id="excerpt"
                name="excerpt"
                className={styles.formControl}
                value={formData.excerpt}
                onChange={handleInputChange}
                rows={3}
              />
              {errors.excerpt && <div className={styles.formError}>{errors.excerpt}</div>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="content">Conteúdo (HTML)</label>
              <textarea
                id="content"
                name="content"
                className={styles.formControl}
                value={formData.content}
                onChange={handleInputChange}
                rows={15}
              />
              {errors.content && <div className={styles.formError}>{errors.content}</div>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                name="category"
                className={styles.formControl}
                value={formData.category}
                onChange={handleInputChange}
              >
                {CATEGORIES.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && <div className={styles.formError}>{errors.category}</div>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="readTime">Tempo de leitura</label>
              <input
                type="text"
                id="readTime"
                name="readTime"
                className={styles.formControl}
                value={formData.readTime}
                onChange={handleInputChange}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="image">URL da imagem</label>
              <input
                type="text"
                id="image"
                name="image"
                className={styles.formControl}
                value={formData.image}
                onChange={handleInputChange}
                placeholder="/images/blog/your-image.jpg"
              />
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={!!formData.featured}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="featured">Destacar este artigo</label>
              </div>
            </div>
            
            <div className={styles.formActions}>
              <Button 
                onClick={() => navigate('/admin')} 
                variant="secondary" 
                type="button"
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                variant="primary"
              >
                {isSubmitting ? 'Salvando...' : 'Salvar'}
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </Layout>
  );
};

export default PostFormPage; 