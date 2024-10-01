import React from 'react'
import Navbar from './components/Navabar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/products' element={<Products />} />
      </Routes>
     
    </Router>
  )
}

export default App
