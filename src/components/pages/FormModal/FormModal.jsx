import React, {useEffect} from 'react';
import Modal from 'react-modal';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModalIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: ${({isSucceeded}) => (isSucceeded ? 'green' : 'red')};
`;

const StyledModalText = styled.p`
  padding: 10px;
  text-align: center;
`;

Modal.setAppElement('#root');

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'fixed',
  },

  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '250px',
    width: '70%',
    maxWidth: '600px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
  },
};

const FormModal = ({isModalOpen, closeModal, modalContent}) => {
  const {title, body, isSucceeded} = modalContent;

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        closeModal();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyle}>
      <StyledModalIcon>
        <AiOutlineCloseCircle
          onClick={closeModal}
          style={{cursor: 'pointer', fontSize: '2rem'}}
        />
      </StyledModalIcon>
      <StyledModal>
        <StyledModalHeader isSucceeded={isSucceeded}>{title}</StyledModalHeader>
      </StyledModal>
      <StyledModalText>{body}</StyledModalText>
    </Modal>
  );
};

FormModal.propTypes = {
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  modalContent: PropTypes.object,
};

export default FormModal;
