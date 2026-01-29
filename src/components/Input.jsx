import React from 'react'
import styled from 'styled-components'

const InputField = styled.input`
height:100%;
flex:1;
// border:2px solid red;
border-radius : 50px;
outline:none;
padding-left:16px;
background-color:white;
caret-color: black;
`;

export const Input = () => {
  return (
    <InputField placeholder='Search...' />
  )
}
