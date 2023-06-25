import { useState, useEffect } from "react";
import styled from "styled-components";
import apiClient from "../utils/apiClient";

import Todo from "../components/Todo";
import CreateTodoModal from "../components/modals/CreateTodo";
import actions from "../functions/todo-actions.js";
import { MdAdd } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  align-items: center;
  margin: auto;
  width: max-content;
  padding: 0.25rem;
`;

const Header = styled.h1``;

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: blue;
  color: #fff;
  width: fit-content;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-left: auto;
`;

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getTodos = async () => {
      setTodos([]);
      const { data } = await apiClient.get("todos");

      if (!ignore) {
        setTodos(data);
      }
    };

    let ignore = false;
    getTodos();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Wrapper>
      <Header>Tasks</Header>
      <ModalButton onClick={toggleModal}>
        <MdAdd size={30} />
      </ModalButton>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} />;
      })}

      <CreateTodoModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
      ></CreateTodoModal>
    </Wrapper>
  );
};

export default Home;
