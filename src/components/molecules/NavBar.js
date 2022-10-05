import React from 'react';
import styled, { css } from 'styled-components';

import StyledAnchor from '../atoms/StyledAnchor';

const StyledNav = styled.nav`
  position: absolute;
  z-index: 1000;
  bottom: -85px;
  left: 0px;
  background-color: ${(props) => props.theme.darkFontColor};
  color: ${(props) => props.theme.lightFontColor};
  width: 100%;
  padding: 20px 0px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (max-width: 650px) {
    bottom: -72px;
  }

  @media (max-width: 550px) {
    padding: 20px 10px;
  }

  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      top: 0px;
      bottom: unset;

      @media (max-width: 650px) {
        bottom: 0px;
        top: unset;
      }
    `}
`;

const NavBar = ({ fixed, isDesktop }) => {
  return (
    <StyledNav fixed={fixed} desktop={isDesktop}>
      <div>
        <StyledAnchor
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          anchortype={'nav'}
        >
          Home
        </StyledAnchor>
        <StyledAnchor
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          duration={500}
          anchortype={'nav'}
        >
          Portfolio
        </StyledAnchor>
        <StyledAnchor
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          anchortype={'nav'}
        >
          About
        </StyledAnchor>
        <StyledAnchor
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          anchortype={'nav'}
        >
          Contact
        </StyledAnchor>
      </div>
    </StyledNav>
  );
};

export default NavBar;
