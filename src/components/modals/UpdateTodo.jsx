import Modal from "styled-react-modal";
import styled from "styled-components";
import { useState } from "react";

const ModalWrapper = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 2rem;
`;

const Header = styled.h1``;

const TaskInput = styled.input`
  padding: 0.25rem;
  width: 100%;
`;
const DescriptionInput = styled.textarea`
  padding: 0.25rem;
  width: 100%;
`;
const UpdateButton = styled.button`
  display: flex;
  justify-content: center;
  width: 50%;
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bolder;
  cursor: pointer;
  background-color: ${({ disabled }) => (disabled ? "grey" : "blue")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : null)};
`;

const UpdateTodo = ({ isOpen, onBackgroundClick, onUpdateTodo, todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const actions = {
      title: (arg) => setTitle(arg),
      description: (arg) => setDescription(arg),
    };

    actions[inputName](inputValue);
  };

  return (
    <ModalWrapper isOpen={isOpen} onBackgroundClick={onBackgroundClick}>
      <Header>Edit Task</Header>
      <TaskInput
        value={title}
        onChange={handleChange}
        placeholder="New Task"
        name="title"
      />
      <DescriptionInput
        value={description}
        onChange={handleChange}
        placeholder="Task Description"
        name="description"
        rows="10"
      />
      <UpdateButton>Save</UpdateButton>
    </ModalWrapper>
  );
};

export default UpdateTodo;
