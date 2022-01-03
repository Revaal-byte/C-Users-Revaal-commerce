import styled from "styled-components";
import React from 'react';
//import './Button.css';
import { Link } from 'react-router-dom';

export const Button = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: #000;
border: 0.05rem solid var(--mainDark);
border-color: ${props =>
  props.cart ? "var(--mainYellow)" : "var(--mainDark)"};
color: var(--mainDark);
color: ${props => (props.cart ? "var(--mainYellow)" : "var(--mainWhite)")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
outline-color: red;
cursor: pointer;
display: inline-block;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
  background: var(--mainDark);
  background: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--mainWhite)"};
  color: var(--mainDark);
}
&:focus {
  outline: none;
}
`;

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: #000;
  border: 0.05rem solid var(--mainDark);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--mainDark)"};
  color: var(--mainDark);
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--mainWhite)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainDark);
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--mainWhite)"};
    color: var(--mainDark);
  }
  &:focus {
    outline: none;
  }
`;
