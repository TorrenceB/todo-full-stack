import { useState, useEffect } from "react";
import styled from "styled-components";
import actions from "../functions/todo-actions";

import Todo from "../components/Todo";
import CreateTodoModal from "../components/modals/CreateTodo";
import UpdateTodoModal from "../components/modals/UpdateTodo";
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
  const [todoEditing, setTodoEditing] = useState({});
  const [isFetchingTodos, setIsFetchingTodos] = useState(false);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

  const toggleCreateModal = () => {
    setCreateModalIsOpen(!createModalIsOpen);
  };

  const toggleUpdateModal = (selectedTodo = {}) => {
    setUpdateModalIsOpen(!updateModalIsOpen);
    setTodoEditing(selectedTodo);
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

  const onUpdateTodo = async () => {
    const todos = await fetchTodos();

    setTodos(todos);
    setIsFetchingTodos(false);
    toggleUpdateModal();
  };

  const onDeleteTodo = async (id = "") => {
    const { status } = await actions.deleteTodo(id);

    if (status === 200) {
      const newTodos = [...todos].filter(
        ({ id: currentId }) => currentId !== id
      );

      setTodos(newTodos);
    }
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
      <ModalButton onClick={toggleCreateModal}>
        <MdAdd size={30} />
      </ModalButton>
      {!isFetchingTodos
        ? todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={() => onDeleteTodo(todo.id)}
                updateTodo={() => toggleUpdateModal(todo)}
              />
            );
          })
        : "Loading Todos"}

      <CreateTodoModal
        isOpen={createModalIsOpen}
        onBackgroundClick={toggleCreateModal}
        onCreateTodo={onCreateTodo}
      ></CreateTodoModal>
      <UpdateTodoModal
        todo={todoEditing}
        isOpen={updateModalIsOpen}
        onBackgroundClick={toggleUpdateModal}
        onUpdateTodo={onUpdateTodo}
      ></UpdateTodoModal>
    </Wrapper>
  );
};

export default Home;
