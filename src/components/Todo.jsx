import React from "react";
import styled from "styled-components";
import { DeleteRounded } from "@mui/icons-material";

const Wrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  background-color: #d3d3d3;
  border-radius: 0.5rem;
  min-width: fit-content;
  width: 20rem;
  padding: 1rem;
  margin: 0.5rem;
`;

const Checkbox = styled.input``;

const Todo = ({ title }) => {
  return (
    <Wrapper>
      <Checkbox type="checkbox"></Checkbox>
      {title}
      <DeleteRounded />
    </Wrapper>
  );
};

export default Todo;
