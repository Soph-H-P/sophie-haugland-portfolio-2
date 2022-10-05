import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import PreviewModal from '../atoms/PreviewModal';

const ProjectCardContainer = styled(Button)`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 280px;
  align-items: center;
  text-align: left;
  margin: 15px;
  white-space: unset;
  border: none;
  padding: 10px;
  box-shadow: ${(props) => props.theme.boxShadowNone};

  & > div {
    height: 120px;
    overflow: hidden;
  }

  img {
    width: 160px;
  }

  h3 {
    font-size: 28px;
    font-weight: normal;
    margin: 5px 0px;
    text-align: center;
  }

  p {
    font-size: 18px;
    margin: 5px;
    font-weight: 300;
  }

  @media (min-width: 1200px) {
    width: 250px;
    height: 300px;

    img {
      width: 220px;
    }
  }

  &:hover {
    color: ${(props) => props.theme.darkFontColor};
    animation: cardpulse 0.6s ease;
    animation-iteration-count: 1;
  }

  &:focus {
    color: ${(props) => props.theme.darkFontColor};
  }

  @keyframes cardpulse {
    0% {
      transform: scale(1);
      box-shadow: ${(props) => props.theme.boxShadowNone};
    }
    50% {
      transform: scale(1.01);
      box-shadow: ${(props) => props.theme.boxShadow};
    }
    100% {
      transform: scale(1);
      box-shadow: ${(props) => props.theme.boxShadowNone};
    }
  }
`;

const ProjectCard = ({ project }) => {
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  const showModal = () => {
    setPreviewModalOpen(true);
  };

  const handleCancel = () => {
    setPreviewModalOpen(false);
  };

  return (
    <>
      <PreviewModal
        previewModalOpen={previewModalOpen}
        setPreviewModalOpen={setPreviewModalOpen}
        project={project}
        showModal={showModal}
        handleCancel={handleCancel}
      ></PreviewModal>
      <ProjectCardContainer
        onClick={() => {
          showModal();
        }}
      >
        <div>
          <img src={project.imageSrc} alt={project.name} />
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </ProjectCardContainer>
    </>
  );
};

export default ProjectCard;
