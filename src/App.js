import React, { useState } from "react";
import "./App.css";
import Todo_App from "./Todo/Todo_App";
import {createGlobalStyle} from 'styled-components';
import TimeTree from "./TimeTree/TimeTree_App";

const App =()=>{
  
  const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

  return (
    <>
    <GlobalStyle />
    <Todo_App />
    <TimeTree />
  </>
  );
}
export default App;