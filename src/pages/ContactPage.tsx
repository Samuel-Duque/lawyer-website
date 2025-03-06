import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import styles from './ContactPage.module.css';

// Social media icons (could be replaced with actual icon components)
const socialIcons = {
  facebook: '📘',
  instagram: '📷',
  linkedin: '📋',
  twitter: '🐦',
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formFocus, setFormFocus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error state when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleFocus = (field: string) => {
    setFormFocus(field);
  };

  const handleBlur = () => {
    setFormFocus(null);
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      subject: formData.subject.trim() === '',
      message: formData.message.trim() === '',
    };

    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <Layout>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1>Entre em Contato</h1>
          <p>Estamos prontos para ajudar você com suas necessidades jurídicas</p>
        </div>
      </div>

      <Section backgroundColor="light" padding="large">
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>Informações de Contato</h3>
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>📍</span>
                </div>
                <div>
                  <h4>Endereço</h4>
                  <p>Rua Exemplo, 123, Centro</p>
                  <p>São Paulo - SP, 01001-000</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>📞</span>
                </div>
                <div>
                  <h4>Telefone</h4>
                  <p>(81) 99852-9030</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>✉️</span>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>contato@locateladvocacia.com.br</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>⏰</span>
                </div>
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>
              
              <div className={styles.socialMedia}>
                <h4>Redes Sociais</h4>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>{socialIcons.facebook}</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>{socialIcons.instagram}</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>{socialIcons.linkedin}</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>{socialIcons.twitter}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>Envie uma Mensagem</h3>
            {formSubmitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h4>Mensagem Enviada!</h4>
                <p>Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={`${styles.formGroup} ${formErrors.name ? styles.hasError : ''} ${formFocus === 'name' ? styles.focused : ''}`}>
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.name && <div className={styles.errorMessage}>Por favor, insira seu nome</div>}
                </div>
                
                <div className={styles.formRow}>
                  <div className={`${styles.formGroup} ${formErrors.email ? styles.hasError : ''} ${formFocus === 'email' ? styles.focused : ''}`}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                    />
                    {formErrors.email && <div className={styles.errorMessage}>Por favor, insira um email válido</div>}
                  </div>
                  
                  <div className={`${styles.formGroup} ${formFocus === 'phone' ? styles.focused : ''}`}>
                    <label htmlFor="phone">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                
                <div className={`${styles.formGroup} ${formErrors.subject ? styles.hasError : ''} ${formFocus === 'subject' ? styles.focused : ''}`}>
                  <label htmlFor="subject">Assunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Direito Civil">Direito Civil</option>
                    <option value="Direito Familiar">Direito Familiar</option>
                    <option value="Direito Trabalhista">Direito Trabalhista</option>
                    <option value="Direito Empresarial">Direito Empresarial</option>
                    <option value="Direito Tributário">Direito Tributário</option>
                    <option value="Direito Imobiliário">Direito Imobiliário</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {formErrors.subject && <div className={styles.errorMessage}>Por favor, selecione um assunto</div>}
                </div>
                
                <div className={`${styles.formGroup} ${formErrors.message ? styles.hasError : ''} ${formFocus === 'message' ? styles.focused : ''}`}>
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                  ></textarea>
                  {formErrors.message && <div className={styles.errorMessage}>Por favor, escreva sua mensagem</div>}
                </div>
                
                <div className={styles.formActions}>
                  <Button type="submit" variant="primary" size="large">
                    Enviar Mensagem
                  </Button>
                  <p className={styles.requiredFieldsNote}>* Campos obrigatórios</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
      
      <Section backgroundColor="primary" padding="medium">
        <div className={styles.mapContainer}>
          <h3>Nossa Localização</h3>
          <div className={styles.map}>
            {/* In a real application, you would embed a Google Map here */}
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapIcon}>📍</div>
              <p>Rua Exemplo, 123, Centro - São Paulo - SP</p>
              <button className={styles.directionsButton}>
                Obter Direções
              </button>
            </div>
          </div>
        </div>
      </Section>

      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Agende uma Consulta</h2>
          <p>Disponível para atendimento presencial ou virtual</p>
          <div className={styles.ctaButtons}>
            <Button variant="primary" size="large">
              Ligar Agora
            </Button>
            <Button variant="outlined-gold" size="large">
              Agendar Online
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage; 