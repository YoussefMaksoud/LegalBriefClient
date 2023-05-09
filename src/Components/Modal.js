import React from 'react';
import '../Styling/Modal.css';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'80%',
      borderRadius:'5px',
      color:'white',
      background:'black',
      height:'400px',
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
  };

const Modal = (props) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <div id = "modal-cont">
      <button id = 'more-info' onClick={openModal}>More Info</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button id = "close-btn" onClick={closeModal}>X</button>
        <h2 id = "option-name">{props.option_name}</h2>
        <p id = "option-description">{props.option_description}</p>
      </ReactModal>
    </div>
  );
};

export default Modal;