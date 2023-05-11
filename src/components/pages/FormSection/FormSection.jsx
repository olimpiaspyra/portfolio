import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

import FormModal from '../FormModal/FormModal';

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
    padding: 10px;
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
    padding: 10px;
    border: 1px solid var(--green);
    background-color: var(--navy);
    box-shadow: 5px 5px 10px #010911, -2px -2px 10px #0f60a8;
    color: var(--lightest-slate);
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

  .errors {
    padding-top: 5px;
    text-align: center;
    color: red;
    font-size: 1.6rem;
  }
`;

const schema = yup
  .object({
    name: yup
      .string()
      .required('Name must be at least 3 characters and no more than 15 characters')
      .min(3)
      .max(15),
    email: yup.string().required('Required').email('Please Enter A Valid Email!'),
    subject: yup.string().required('Required').min(3),
    message: yup.string().required('Required').min(3),
  })
  .required();

const FormSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [modalContent, setModalContent] = useState({
    title: 'The message was sent successfully',
    body: 'Thanks for your message! I will answer as soon as possible 😀',
    isSucceeded: true,
  });

  const successfullySend = {
    title: 'The message has been sent successfully',
    body: `Hi! Thanks for your message! I will answer as soon as possible 😀`,
    isSucceeded: true,
  };

  const unsuccessfullySend = {
    title: 'Failed to send message',
    body: `Hi! There is problem with sending the message. You can try again later or contact me by email - olimpia.spyra@gmail.com`,
    isSucceeded: false,
  };

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = data => {
    console.log(data);
    if (data) {
      setModalOpen(true);
      setModalContent({...successfullySend});
    }

    reset();
  };

  const onError = () => {
    setModalOpen(true);
    setModalContent({...unsuccessfullySend});
  };

  return (
    <StyledContainer id='contact'>
      <h2>Contact</h2>
      <StyledSection>
        <form action='post' noValidate onSubmit={handleSubmit(handleOnSubmit, onError)}>
          <h3>Let is stay in touch</h3>
          <label> Your name</label>
          <input type='text' {...register('name')} />
          <div className='errors'>{errors.name?.message}</div>
          <label>Your email</label>
          <input type='text' {...register('email')} />
          <div className='errors'>{errors.email?.message}</div>
          <label>Subject</label>
          <input type='text' {...register('subject')} />
          <div className='errors'>{errors.subject?.message}</div>
          <label>Message</label>
          <textarea
            name=''
            id=''
            cols='37'
            rows='5'
            {...register('message')}
          ></textarea>
          <div className='errors'>{errors?.message?.message}</div>
          <button type='submit'>Send</button>
        </form>
        <FormModal
          isModalOpen={isModalOpen}
          closeModal={() => setModalOpen(false)}
          modalContent={modalContent}
        />
      </StyledSection>
    </StyledContainer>
  );
};

export default FormSection;
