import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SectionContainer from './components/atoms/SectionContainer';
import NavBar from './components/molecules/NavBar';
import Footer from './components/molecules/Footer';
import HomeSection from './components/pageSections/HomeSection';
import PortfolioSection from './components/pageSections/PortfolioSection';
import AboutSection from './components/pageSections/AboutSection';
import ContactSection from './components/pageSections/ContactSection';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const App = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 650);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [navIsFixed, setNavIsFixed] = useState(false);

  const handleResizeWindow = () => {
    setWindowHeight(window.innerHeight);
    setIsDesktop(window.innerWidth >= 650);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => window.removeEventListener('resize', handleResizeWindow);
  }, []);

  useEffect(() => {
    const handleScrollPage = () => {
      setScrollHeight(window.pageYOffset);
      if (isDesktop) {
        if (scrollHeight >= windowHeight) {
          setNavIsFixed(true);
        } else {
          setNavIsFixed(false);
        }
      } else {
        if (scrollHeight >= 68) {
          setNavIsFixed(true);
        } else {
          setNavIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScrollPage);
    return () => window.removeEventListener('scroll', handleScrollPage);
  }, [scrollHeight, windowHeight, isDesktop]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SectionContainer home={true} id="home" style={{ backgroundColor: 'rgba(0, 0, 0, 0.66)' }}>
        <HomeSection />
        <PortfolioSection />
      </SectionContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
