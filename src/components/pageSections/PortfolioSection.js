import React from 'react';
import styled from 'styled-components';

import Subtitle from '../atoms/Subtitle';
import ProjectCard from '../molecules/ProjectCard';

import projects from '../../constants/projects';
import theme from '../../styles/theme';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 999px;
  margin: 40px auto;
  padding: 30px 10px;
  background: ${theme.lightFontColor}9;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`; 

const PortfolioSection = () => {
  return (
    <>
      <Subtitle>Portfolio</Subtitle>
      <ProjectsContainer>
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </ProjectsContainer>
    </>
  );
};

export default PortfolioSection;
