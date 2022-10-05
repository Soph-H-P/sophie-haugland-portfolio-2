import React from 'react';
import styled from 'styled-components';

import profilePic from '../../assets/profile-sophie.jpg';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 800px;

  img {
    width: 280px;
    border-radius: 50%;
    margin-right: 50px;
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

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px;

    img {
      width: 240px;
      margin-right: 0px;
    }

    h3 {
      margin-top: 20px;
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <img src={profilePic} alt="Sophie Haugland Pedersen" />
      <div>
        <h3>Who am I?</h3>
        <p>
          I am a Front-end developer student currently located in the Viken area in Norway. It gives
          me great joy to create great designs and exceptional user experience.
        </p>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
