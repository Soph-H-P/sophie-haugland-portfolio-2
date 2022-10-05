import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import up from '../../assets/up.svg';

import Subtitle from '../atoms/Subtitle';
import StyledAnchor from '../atoms/StyledAnchor';

import handleContactFormSubmit from '../../utils/submitForm';

const StyledForm = styled.form`
  width: 500px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.lightFontColor};

  button {
    width: 216px;
    font-size: 22px;
    font-weight: 300;
    color: ${(props) => props.theme.lightFontColor};
    cursor: pointer;
    transition: all 0.3s ease;
    background: ${(props) => props.theme.darkFontColor};
    border: 2px solid ${(props) => props.theme.lightFontColor};
    align-self: center;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;

  input,
  textarea {
    border: 2px solid ${(props) => props.theme.lightFontColor};
    padding: 5px;
    font-size: 20px;
    color: ${(props) => props.theme.darkFontColor};
  }

  label {
    font-size: 20px;
    padding: 5px 0px;
  }

  @media (max-width: 600px) {
    input,
    textarea {
      font-size: 16px;
    }

    label {
      font-size: 16px;
    }
  }
`;

const JumpToTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  a {
    width: 70px;
    margin-right: 20px;
  }
`;

const ContactSection = () => {
  const [messageIsSent, setMessageIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setMessageIsSent(false);
    setIsError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const lengthOfMessage = e.target.value.length;
    setCharacterCount(500 - lengthOfMessage);
  };

  const [characterCount, setCharacterCount] = useState(500);

  return (
    <>
      <Subtitle>Contact</Subtitle>
      <StyledForm
        action="https://soph-web-dev.eu/bug-blog/wp-json/contact-form-7/v1/contact-forms/104/feedback"
        method="post"
        onSubmit={(e) => handleContactFormSubmit(e, setMessageIsSent, setIsError, setIsSending)}
      >
        {messageIsSent && <p>Your message has been sent</p>}
        <InputContainer>
          <label htmlFor="full-name">Name</label>
          <input type="text" id="full-name" name="full-name" required />
        </InputContainer>

        <InputContainer>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </InputContainer>

        <InputContainer>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </InputContainer>

        <InputContainer>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={(e) => {
              handleChange(e);
            }}
            id="message"
            name="message"
            maxLength="500"
            required
          ></textarea>
          <p>
            Characters remaining: <span id="character-count">{characterCount}</span>
          </p>
        </InputContainer>
        {isError && <p>There was an error sending the message, please try again later.</p>}
        <button type="submit" aria-label="send">
          {isSending && !isError ? 'Sending' : 'Send'}
        </button>
      </StyledForm>
      <JumpToTopContainer>
        <StyledAnchor to="home" spy={true} smooth={true} duration={500} anchortype={'button'}>
          <img src={up} alt="back to top" />
        </StyledAnchor>
      </JumpToTopContainer>
    </>
  );
};

export default ContactSection;
