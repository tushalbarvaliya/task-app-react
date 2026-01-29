import React, { useRef } from "react";
import styled from "styled-components";
import { AddModel } from "./AddModel";

const Button = styled.button`
  height: 3rem;
  font-size: 30px;
  background-color: blue;
  width: 3rem;
  font-weigth: 900;
  color: white;
  border-radius: 10px;

  &:hover {
    background-color: rgb(17, 17, 199);
  }
`;

export const AddButton = ({ refi ,addTask}) => {
  const addDialog = useRef();
  function handelAppBtnClick() {
    addDialog.current.showModal();
  }
  function  hadelAddtask(title,type,desc) {
    // console.log(title,type,desc);
    
    addTask(title,type,desc);
  }
  return (
    <>
      <Button onClick={handelAppBtnClick}>+</Button>
      <AddModel refi={addDialog} task='add'addTask={hadelAddtask}/>
    </>
  );
};
