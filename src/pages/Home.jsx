import { useState, useEffect } from "react";
import styled from "styled-components";
import apiClient from "../utils/apiClient";

import Todo from "../components/Todo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1``;

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
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} />;
      })}
    </Wrapper>
  );
};

export default Home;
