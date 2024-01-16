
import Header from "./components/header/Header";
import About from './components/about/About';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import './App.css';

WebFont.load({
  google: {
    families: ['Roboto:400,700']
  }
});



function App() {


  return (
    <>
      <Header />

      <About />

      <Body />

      <Footer />
    </>


  )




}

export default App
