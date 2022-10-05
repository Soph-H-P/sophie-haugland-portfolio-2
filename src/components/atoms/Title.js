import styled from 'styled-components';

const Title = styled.h1`
  font-family: ${(props) => props.theme.headingFontHighlight};
  font-weight: normal;
  font-size: 76px;
  color: ${(props) => props.theme.lightFontColor};
  margin: 0px;
  text-align: center;

  @media (max-width: 650px) {
    font-size: 44px;
  }
`;

export default Title;
