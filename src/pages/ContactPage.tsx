import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import GoogleMapEmbed from '../components/ui/GoogleMapEmbed';
import styles from './ContactPage.module.css';

// Import React Icons
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn,
  FaTwitter,
  FaLongArrowAltRight,
  FaCheckCircle,
  FaTimes,
  FaArrowRight
} from 'react-icons/fa';

// Locatel Advocacia Google Maps embed URL
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1975.0461696951575!2d-34.9174677!3d-8.0920656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa258c58ef878b98d%3A0xb3abfc34e84eb53e!2sLocatel%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1741627846508!5m2!1spt-BR!2sbr";

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
  const [notification, setNotification] = useState<{show: boolean, message: string, type: 'success' | 'error'} | null>(null);

  // Handle notification dismiss
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (notification && notification.show) {
      timer = setTimeout(() => {
        setNotification(prev => prev ? {...prev, show: false} : null);
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [notification]);

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
      setNotification({
        show: true,
        message: 'Por favor, preencha todos os campos obrigatórios corretamente.',
        type: 'error'
      });
      return;
    }
    
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Show success notification
    setNotification({
      show: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      type: 'success'
    });
    
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

  const closeNotification = () => {
    setNotification(prev => prev ? {...prev, show: false} : null);
  };

  return (
    <Layout>
      {/* Notification Toast */}
      {notification && notification.show && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          <div className={styles.notificationIcon}>
            {notification.type === 'success' ? FaCheckCircle({}) : FaTimes({})}
          </div>
          <p>{notification.message}</p>
          <button 
            onClick={closeNotification} 
            className={styles.closeNotification}
            aria-label="Fechar notificação"
          >
            {FaTimes({})}
          </button>
        </div>
      )}

      {/* Premium Hero Section with Paralax Effect */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Entre em Contato</h1>
          <div className={styles.separator}></div>
          <p>Estamos prontos para oferecer soluções jurídicas personalizadas e atender às suas necessidades legais com excelência</p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className={styles.contactWrapper}>
        <div className={styles.contactContainer}>
          {/* Contact Information Card */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>Informações de Contato</h3>
              
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  {FaMapMarkerAlt({ className: styles.icon })}
                </div>
                <div className={styles.infoContent}>
                  <h4>Endereço</h4>
                  <p>R. Antônio Almeida, 168, Sala 17  Imbiribeira</p>
                  <p>Recife - PE, 51170-530</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  {FaPhone({ className: styles.icon })}
                </div>
                <div className={styles.infoContent}>
                  <h4>Telefone</h4>
                  <p>(81) 99852-9030</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  {FaEnvelope({ className: styles.icon })}
                </div>
                <div className={styles.infoContent}>
                  <h4>Email</h4>
                  <p>silvialocateladvogada@gmail.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  {FaClock({ className: styles.icon })}
                </div>
                <div className={styles.infoContent}>
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>
              
              <div className={styles.socialMedia}>
                <h4>Redes Sociais</h4>
                <div className={styles.socialIcons}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                    {FaFacebookF({ className: styles.socialIcon })}
                  </a>
                  <a href="https://www.instagram.com/silvialocatel.adv/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                    {FaInstagram({ className: styles.socialIcon })}
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    {FaLinkedinIn({ className: styles.socialIcon })}
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                    {FaTwitter({ className: styles.socialIcon })}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={styles.contactFormContainer}>
            <div className={styles.formHeader}>
              <h3>Envie uma Mensagem</h3>
              <p>Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.</p>
            </div>
            
            {formSubmitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>
                  {FaCheckCircle({})}
                </div>
                <h4>Mensagem Enviada!</h4>
                <p>Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.</p>
                <Button 
                  type="button" 
                  onClick={() => setFormSubmitted(false)} 
                  variant="outlined"
                >
                  Enviar Nova Mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={`${styles.formGroup} ${formErrors.name ? styles.hasError : ''} ${formFocus === 'name' ? styles.focused : ''}`}>
                  <label htmlFor="name">Nome Completo <span className={styles.required}>*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    placeholder="Seu nome completo"
                    required
                  />
                  {formErrors.name && <div className={styles.errorMessage}>Por favor, insira seu nome</div>}
                </div>
                
                <div className={styles.formRow}>
                  <div className={`${styles.formGroup} ${formErrors.email ? styles.hasError : ''} ${formFocus === 'email' ? styles.focused : ''}`}>
                    <label htmlFor="email">Email <span className={styles.required}>*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder="seu.email@exemplo.com"
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
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div className={`${styles.formGroup} ${formErrors.subject ? styles.hasError : ''} ${formFocus === 'subject' ? styles.focused : ''}`}>
                  <label htmlFor="subject">Assunto <span className={styles.required}>*</span></label>
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
                  <label htmlFor="message">Mensagem <span className={styles.required}>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    placeholder="Descreva como podemos ajudar você..."
                    rows={6}
                    required
                  ></textarea>
                  {formErrors.message && <div className={styles.errorMessage}>Por favor, insira sua mensagem</div>}
                </div>
                
                <div className={styles.formActions}>
                  <p className={styles.requiredFieldsNote}>
                    <span className={styles.required}>*</span> Campos obrigatórios
                  </p>
                  <Button 
                    type="submit" 
                    variant="primary"
                  >
                    Enviar Mensagem {FaLongArrowAltRight({ style: { marginLeft: '8px' } })}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map Section - Updated with Google Maps iframe embed */}
      <Section backgroundColor="light" padding="large">
        <div className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <h2>Encontre-nos</h2>
            <p>Visite o escritório Locatel Advocacia em Recife</p>
          </div>
          <div className={styles.mapContainer}>
            <GoogleMapEmbed 
              embedUrl={GOOGLE_MAPS_EMBED_URL}
              height="400px"
            />
          </div>
          <div className={styles.mapDirections}>
            <a 
              href="https://maps.app.goo.gl/4j8oJkLh1WM35TRL9" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.directionsButton}
            >
              Como Chegar {FaArrowRight({ style: { marginLeft: '8px', fontSize: '14px' } })}
            </a>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section backgroundColor="dark" padding="large">
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Precisa de Aconselhamento Jurídico?</h2>
            <p>Agende uma consulta inicial gratuita com um de nossos especialistas hoje mesmo</p>
            <div className={styles.ctaButtons}>
              <Button variant="primary">Agendar Consulta</Button>
              <Button variant="outlined-gold">Conhecer Nossos Serviços</Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage; 