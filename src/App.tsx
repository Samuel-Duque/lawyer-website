import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import SobreNosPage from './pages/SobreNosPage';
import AreasDeAtuacaoPage from './pages/AreasDeAtuacaoPage';
import AreaDeAtuacaoPage from './pages/AreaDeAtuacaoPage';
import AdminPage from './pages/AdminPage';
import PostFormPage from './pages/PostFormPage';
import ScrollToTop from './components/utils/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobreNosPage />} />
        <Route path="/areas-de-atuacao" element={<AreasDeAtuacaoPage />} />
        <Route path="/areas-de-atuacao/:area" element={<AreaDeAtuacaoPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/post/new" element={<PostFormPage />} />
        <Route path="/admin/post/edit/:id" element={<PostFormPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
