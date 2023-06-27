import styled from "styled-components";
import Modal from "styled-react-modal";
import actions from "../../functions/todo-actions";
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

const TaskInput = styled.input`
  padding: 0.25rem;
  width: 100%;
`;
const DescriptionInput = styled.textarea`
  padding: 0.25rem;
  width: 100%;
`;
const AddButton = styled.button`
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: blue;
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bolder;
`;

const CreateTodoModal = ({ isOpen, onBackgroundClick }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const create = () => {
    if (task) {
      const todo = {
        description,
        title: task,
        isComplete: false,
      };

      actions.createTodo(todo);
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <ModalWrapper isOpen={isOpen} onBackgroundClick={onBackgroundClick}>
      <TaskInput value={task} placeholder="New Task" onChange={handleChange} />
      <DescriptionInput
        value={description}
        placeholder="Task Description"
        rows="10"
      />
      <AddButton onClick={create}>Add Task</AddButton>
    </ModalWrapper>
  );
};

export default CreateTodoModal;
