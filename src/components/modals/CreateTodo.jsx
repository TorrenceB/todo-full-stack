import Modal from "styled-react-modal";

const ModalWrapper = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const CreateTodoModal = ({ isOpen, onBackgroundClick }) => {
  return (
    <ModalWrapper isOpen={isOpen} onBackgroundClick={onBackgroundClick}>
      <span>Some Text Here...</span>
    </ModalWrapper>
  );
};

export default CreateTodoModal;
