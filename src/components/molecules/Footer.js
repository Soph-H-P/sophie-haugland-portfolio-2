import React from 'react';
import styled from 'styled-components';

import linkedIn from '../../assets/linkedin.svg';
import gitHub from '../../assets/github.svg';
import website from '../../assets/website.svg';

import StyledAnchor, { StyledATag } from '../atoms/StyledAnchor';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.darkFontColor};
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 600px) {
    padding: 20px 20px 68px 20px;
  }

  @media (max-width: 650px) {
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledATag
        text={<img src={linkedIn} alt="linkedIn" />}
        href={'https://www.linkedin.com/in/smphaugland/'}
        anchorType={'footer'}
        target="_blank"
      />
      <StyledATag
        text={<img src={gitHub} alt="GitHub" />}
        href={'https://github.com/Soph-H-P'}
        anchorType={'footer'}
        target="_blank"
      />
      <StyledATag
        text={<img src={website} alt="website" />}
        href={'https://soph-web-dev.eu/'}
        anchorType={'footer'}
        target="_blank"
      />
    </StyledFooter>
  );
};

export default Footer;
