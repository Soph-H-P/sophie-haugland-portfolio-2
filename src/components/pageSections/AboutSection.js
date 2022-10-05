import React from 'react';
import styled from 'styled-components';

import Subtitle from '../atoms/Subtitle';
import Skill from '../molecules/Skill';
import Profile from '../molecules/Profile';

import responsive from '../../assets/responsive.svg';
import userCentric from '../../assets/user-centric.svg';
import design from '../../assets/design.svg';
import development from '../../assets/development.svg';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  margin: 40px auto;
`;

const AboutSection = () => {
  return (
    <>
      <Subtitle dark="dark">About</Subtitle>
      <Profile />
      <SkillsContainer>
        <Skill
          imgSrc={responsive}
          skillName="Responsive"
          description="Designs to fit all screen sizes"
        />
        <Skill
          imgSrc={userCentric}
          skillName="User Centric"
          description="Solutions that are easy to use"
        />
        <Skill
          imgSrc={design}
          skillName="Front-end"
          description="Familiar with HTML, CSS, JS, TS & React"
        />
        <Skill imgSrc={development} skillName="Back-end" description="Familiar with Node.js" />
      </SkillsContainer>
    </>
  );
};

export default AboutSection;
