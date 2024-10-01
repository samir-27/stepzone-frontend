import React from 'react'
import Navbar from './components/Navabar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/products' element={<Products />} />
      <Route path='/product' element={<Product />} />
      </Routes>
     
    </Router>
  )
}

export default App
