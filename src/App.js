import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benifits from './components/Benifits-and-support';
import MfaAd from './components/Best-MFA';
import MfdChooseWealthy from './components/MFD-choose-wealthy';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.onscroll = function() {
        setScrollPosition(window.scrollY)
    };
  }, []);



  return (
    <div className="App">
      <Navbar scrollPosition={scrollPosition}/>
      <Hero />
      <Benifits/>
      <MfdChooseWealthy />
      <MfaAd />
    </div>
  );
}

export default App;
