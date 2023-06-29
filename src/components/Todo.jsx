import React from "react";
import styled from "styled-components";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d3d3d3;
  border-radius: 0.5rem;
  min-width: fit-content;
  width: 20rem;
  padding: 1rem;
`;

const Checkbox = styled.input``;

const Left = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const Right = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const Icon = styled.span`
  cursor: pointer;
`;

const Todo = (props) => {
  const iconSize = 26;

  return (
    <Wrapper>
      <Left>
        <Checkbox type="checkbox"></Checkbox>
        {props.todo.title}
      </Left>
      <Right>
        <Icon onClick={props.updateTodo}>
          <MdModeEditOutline size={iconSize} />
        </Icon>
        <Icon onClick={props.deleteTodo}>
          <MdDeleteOutline size={iconSize} />
        </Icon>
      </Right>
    </Wrapper>
  );
};

export default Todo;
