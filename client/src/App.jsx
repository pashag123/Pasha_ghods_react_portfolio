
import React from 'react';
import Header from "./components/header/Header";
import About from './components/about/About';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import ContactMe from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

WebFont.load({
  google: {
    families: ['Roboto:400,700']
  }
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='d-flex h-100'>
            <Header />
            <div>
              <About />
              <Body />
              {/* <Footer /> */}
            </div>
          </div>
        } />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
