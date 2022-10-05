import React from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  text-align: center;
  margin-bottom: 25px;

  img {
    width: 160px;
  }

  h3 {
    font-size: 35px;
    font-weight: normal;
    margin: 0;
  }

  p {
    font-size: 21px;
    margin: 5px;
    font-weight: 300;
  }
`;

const Skill = ({ imgSrc, skillName, description }) => {
  return (
    <SkillContainer>
      <img src={imgSrc} alt={skillName} />
      <h3>{skillName}</h3>
      <p>{description}</p>
    </SkillContainer>
  );
};

export default Skill;
