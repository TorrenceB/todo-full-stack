import { useState, useEffect } from "react";
import styled from "styled-components";
import apiClient from "../utils/apiClient";

import Todo from "../components/Todo";
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

const AddButton = styled.button`
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
      <AddButton>
        <MdAdd size={30} />
      </AddButton>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} />;
      })}
    </Wrapper>
  );
};

export default Home;
