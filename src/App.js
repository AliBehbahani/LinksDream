import "./App.css";
import { useState, useEffect } from "react";
import vases from "./vases";
import VaseList from "./components/VaseList";
import IncrementCount from "./components/Increment";
// -------------------------------------
import { ThemeProvider } from "styled-components";
import {
  Header,
  GlobalStyle,
  Row,
  LeftCol,
  RightCol,
  Time,
  Points,
  MainImage,
} from "./styles";

const theme = {
  backgroundColor: "#f1faee",
  mainColor: "black",
};
// ------------------------

// -------------------------
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// ======================================================
function App() {
  // useEffect(() => {
  //   let x = 5000;
  //   const interval = setInterval((x) => setShow(1), x);
  // });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>Link's dream</Header>
      <Row>
        <LeftCol>
          <Time>Time:</Time>
          <Points>Points: count={count}</Points>
        </LeftCol>
        {/* -----------------------------*/}
        <RightCol>
          <MainImage src={require("./Images/MainImage.jpeg").default} />
          <VaseList vases={vases} />
        </RightCol>
      </Row>
    </ThemeProvider>
  );
}

export default App;
