import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
       <About/>
      <Skills/>
     <Portfolio/>
       <Contact/>
     <Footer/>
    </main>
    </>
  )
  
}

export default App;