import { useState, useEffect } from "react";
import styled from "styled-components";
import apiClient from "../utils/apiClient";

import Todo from "../components/Todo";

const Wrapper = styled.div``;

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
      {todos.map((todo) => {
        return <Todo id={todo.id} />;
      })}
    </Wrapper>
  );
};

export default Home;
