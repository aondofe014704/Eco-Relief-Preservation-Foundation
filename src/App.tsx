import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurWork from './components/OurWork';
import Impact from './components/Impact';
import GetInvolved from './components/GetInvolved';
import Transparency from './components/Transparency';
import News from './components/News';
import ContactUs from './components/ContactUs';
import Donate from './components/Donate';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={setCurrentPage} />;
      case 'About Us':
        return <AboutUs />;
      case 'Our Work':
        return <OurWork />;
      case 'Impact':
        return <Impact />;
      case 'Get Involved':
        return <GetInvolved />;
      case 'Transparency':
        return <Transparency />;
      case 'News & Updates':
        return <News />;
      case 'Contact Us':
        return <ContactUs />;
      case 'Donate':
        return <Donate />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
