import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Projects from './pages/Projects';
import DesignShowcase from './pages/DesignShowcase';
import Publications from './pages/Publications';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/design" element={<DesignShowcase />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

