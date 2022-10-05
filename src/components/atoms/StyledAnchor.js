import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';

const StyledAnchor = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 300;
  color: ${(props) => props.theme.lightFontColor};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;

  &.active {
    color: ${(props) => props.theme.primaryColor};
  }

  &:hover {
    color: ${(props) => props.theme.lightFontColor};
  }

  ${(props) =>
    props.anchortype === 'nav' &&
    css`
      padding: 5px;
      text-transform: uppercase;

      @media (max-width: 650px) {
        font-size: 14px;
      }

      &:hover {
        color: ${(props) => props.theme.primaryColor};
        animation: navpulse 0.3s ease;
        animation-iteration-count: 1;
      }
    `}

  ${(props) =>
    props.anchortype === 'button' &&
    css`
      width: 216px;
      height: 60px;
      background: ${(props) => props.theme.darkFontColor};
      border: 3px solid ${(props) => props.theme.lightFontColor};
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      text-transform: uppercase;

      @media (max-width: 650px) {
        font-size: 18px;
        border: 2px solid ${(props) => props.theme.lightFontColor};
        width: 150px;
        height: 50px;
      }

      &:hover {
        color: ${(props) => props.theme.lightFontColor};
        animation: buttonpulse 0.3s ease;
        animation-iteration-count: 1;
      }
    `}

  ${(props) =>
    props.anchortype === 'footer' &&
    css`
      padding: 5px;
      font-size: 20px;

      &:hover {
        color: ${(props) => props.theme.primaryColor};
        animation: navpulse 0.3s ease;
        animation-iteration-count: 1;
      }
    `}



  @keyframes buttonpulse {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.05);
    }
    50% {
      transform: scale(1);
    }

    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes navpulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  font-size: 22px;
  font-weight: 300;
  color: ${(props) => props.theme.lightFontColor};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;

  ${(props) =>
    (props.anchortype === 'button' || props.anchortype === 'ghost') &&
    css`
      width: 190px;
      height: 60px;
      background: ${(props) => props.theme.darkFontColor};
      border: 3px solid ${(props) => props.theme.lightFontColor};
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      text-transform: uppercase;

      @media (max-width: 650px) {
        font-size: 18px;
        border: 2px solid ${(props) => props.theme.lightFontColor};
        width: 150px;
        height: 50px;
      }

      &:hover {
        color: ${(props) => props.theme.lightFontColor};
        animation: buttonpulse 0.3s ease;
        animation-iteration-count: 1;
      }
    `}

  ${(props) =>
    props.anchortype === 'ghost' &&
    css`
      width: 190px;
      height: 54px;
      background: ${(props) => props.theme.lightFontColor};
      border: 3px solid ${(props) => props.theme.darkFontColor};
      color: ${(props) => props.theme.darkFontColor};

      @media (max-width: 650px) {
        font-size: 18px;
        border: 2px solid ${(props) => props.theme.darkFontColor};
        width: 146px;
        height: 46px;
      }

      &:hover {
        color: ${(props) => props.theme.darkFontColor};
      }
    `}

  ${(props) =>
    props.anchortype === 'footer' &&
    css`
      padding: 5px;
      font-size: 20px;

      &:hover {
        color: ${(props) => props.theme.primaryColor};
        animation: navpulse 0.3s ease;
        animation-iteration-count: 1;
      }
    `}



  @keyframes buttonpulse {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.05);
    }
    50% {
      transform: scale(1);
    }

    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes navpulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const StyledATag = ({ text, href, anchorType, target = null }) => {
  return (
    <StyledA href={href} anchortype={anchorType} target={target} rel="noreferrer">
      {text}
    </StyledA>
  );
};

export default StyledAnchor;
