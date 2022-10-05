import React from 'react';
import ParticlesBg from 'particles-bg';

import Title from '../atoms/Title';

const HomeSection = () => {
  return (
    <>
      <ParticlesBg type="cobweb" bg={true} />
      <Title>Sophie Haugland</Title>
    </>
  );
};

export default HomeSection;
