import React from "react";
import styled from "styled-components";

import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  row-gap: 0.5rem;
  width: 20%;
  padding: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginHeader = styled.h1``;
const EmailLabel = styled.label``;
const EmailInput = styled.input``;
const PasswordLabel = styled.label``;
const PasswordInput = styled.input``;

const LoginButton = styled.button``;

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newUser = {
      ...user,
      [name]: value,
    };

    setUser(newUser);
  };

  return (
    <Wrapper>
      <LoginHeader>Login To Your Account</LoginHeader>
      <InputWrapper>
        <EmailLabel for="email">Email</EmailLabel>
        <EmailInput
          id="email"
          value={user.email}
          onChange={handleChange}
          name="email"
          type="email"
        />
      </InputWrapper>
      <InputWrapper>
        <PasswordLabel for="password">Password</PasswordLabel>
        <PasswordInput
          id="password"
          value={user.password}
          onChange={handleChange}
          name="password"
          type="password"
        />
      </InputWrapper>
      <LoginButton>Login</LoginButton>
    </Wrapper>
  );
};

export default Login;
