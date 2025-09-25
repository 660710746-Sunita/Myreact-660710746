//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
//import Footer from './components/Footer';

// Import Pages
import HomePage from './pages/HomePage';
import NotFound from './components/NotFound';
//////
import BookListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App"> 
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      <main className="main-content">
      <Routes>
        {/* หน้าแรก - แสดงหนังสือแนะนำ */}
        <Route path="/" element={<HomePage />} />
        {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
        <Route path="*" element={<NotFound />} />

        {/*  ******  */}
        <Route path="/books" element={<BookListPage />} />
        <Route path="/books/:bookId" element={<BookDetailPage />} />
        <Route path="/category/fiction" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      </main>

      {/* Footer - แสดงในทุกหน้า */}
      {/* <Footer /> */}

    </div>
  );
}

export default App;
