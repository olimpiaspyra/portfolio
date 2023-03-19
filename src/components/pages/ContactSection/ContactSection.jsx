import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
max-width: 1000px;
width: 100%;
margin 0 auto;
padding: 0 50px;
min-height: 100vh;

@media screen and (max-width: 1200px) {
  padding: 0;
}

  h2 {
    display: flex;
    align-items: center;
    margin: 10px 0 40px;
    font-size: 2.6rem;
    color: var(--green);
    font-weight: 600;

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      margin-left: 20px;
      height: 1px;
      width: 30%;
      background-color: var(--lightest-navy);
    }
  }
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    margin: 30px 0;
    font-family: var(--font-mono);
    color: var(--lightest-slate);
    font-weight: 600;
  }

  label {
    margin: 15px 0 10px 0;
  }

  input {
    width: 350px;
    height: 40px;
    border: 1px solid var(--green);
    background-color: var(--navy);
    box-shadow: 5px 5px 10px #010911, -2px -2px 10px #0f60a8;
    color: var(--lightest-slate);
  }

  textarea {
    min-width: 350px;
    max-width: 500px;
    min-height: 115px;
    max-height: 300px;
    border: 1px solid var(--green);
    background-color: var(--navy);
    box-shadow: 5px 5px 10px #010911, -2px -2px 10px #0f60a8;
    color: var(--slate);
  }

  button {
    margin: 30px 0;
    padding: 6px 12px;
    width: 100px;
    height: 40px;
    border: 1px solid var(--green);
    border-radius: 5px;
    background-color: var(--navy);
    color: var(--green);
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.2;
    cursor: pointer;

    &:hover {
      background-color: var(--green-tint);
    }
  }
`;

const ContactSection = () => {
  return (
    <StyledContainer>
      <h2>Contact</h2>
      <StyledSection>
        <form action='post' noValidate>
          <h3>Let is stay in touch</h3>
          <label> Your name</label>
          <input type='text' />
          <label>Your email</label>
          <input type='text' />
          <label>Subject</label>
          <input type='text' />
          <label>Message</label>
          <textarea name='' id='' cols='37' rows='5'></textarea>
          <button type='submit'>Send</button>
        </form>
      </StyledSection>
    </StyledContainer>
  );
};

export default ContactSection;
