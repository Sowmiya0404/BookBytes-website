// App.js
import React from 'react';
import Header from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import About from './Pages/About';
import BookDetail from './Pages/BookDetail';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/about' element={<About />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
