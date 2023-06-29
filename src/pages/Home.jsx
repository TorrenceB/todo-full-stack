import { useState, useEffect } from "react";
import styled from "styled-components";
import actions from "../functions/todo-actions";

import Todo from "../components/Todo";
import CreateTodoModal from "../components/modals/CreateTodo";
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
  const [isFetchingTodos, setIsFetchingTodos] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const fetchTodos = async () => {
    setIsFetchingTodos(true);
    setTodos([]);

    const todos = await actions.getTodos();

    return todos;
  };

  const onCreateTodo = async () => {
    const todos = await fetchTodos();

    setTodos(todos);
    setIsFetchingTodos(false);
  };

  useEffect(() => {
    const getTodos = async () => {
      const todos = await fetchTodos();

      if (!ignore) {
        setTodos(todos);
        setIsFetchingTodos(false);
      }
    };

    let ignore = false;
    getTodos();

    return () => {
      ignore = true;
      setIsFetchingTodos(false);
    };
  }, []);

  return (
    <Wrapper>
      <Header>Tasks</Header>
      <ModalButton onClick={toggleModal}>
        <MdAdd size={30} />
      </ModalButton>
      {!isFetchingTodos
        ? todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={() => actions.deleteTodo(todo.id)}
              />
            );
          })
        : "Loading Todos"}

      <CreateTodoModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onCreateTodo={onCreateTodo}
      ></CreateTodoModal>
    </Wrapper>
  );
};

export default Home;
