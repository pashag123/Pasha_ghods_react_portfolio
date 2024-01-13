
import Header from "./components/header/Header";
import About from './components/about/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';


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
    </>


  )




}

export default App
