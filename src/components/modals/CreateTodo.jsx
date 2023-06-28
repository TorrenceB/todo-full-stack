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
  cursor: pointer;
`;

const CreateTodoModal = ({ isOpen, onBackgroundClick, onCreateTodo }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const cleanUp = () => {
    onCreateTodo();
    onBackgroundClick();
    setTask("");
    setDescription("");
  };

  const create = async () => {
    if (task) {
      const todo = {
        description,
        title: task,
        isComplete: false,
      };

      await actions.createTodo(todo);

      cleanUp();
    }
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const actions = {
      task: (arg) => setTask(arg),
      description: (arg) => setDescription(arg),
    };

    actions[inputName](inputValue);
  };

  return (
    <ModalWrapper isOpen={isOpen} onBackgroundClick={onBackgroundClick}>
      <TaskInput
        value={task}
        placeholder="New Task"
        name="task"
        onChange={handleChange}
      />
      <DescriptionInput
        value={description}
        placeholder="Task Description"
        name="description"
        rows="10"
        onChange={handleChange}
      />
      <AddButton onClick={create} disabled>
        Add Task
      </AddButton>
    </ModalWrapper>
  );
};

export default CreateTodoModal;
