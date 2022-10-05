import React from 'react';
import { ThemeProvider } from 'styled-components';
import SectionContainer from './components/atoms/SectionContainer';
import Footer from './components/molecules/Footer';
import HomeSection from './components/pageSections/HomeSection';
import PortfolioSection from './components/pageSections/PortfolioSection';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const App = () => {
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
