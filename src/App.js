import "./App.css";
import { useState, useEffect } from "react";
import vases from "./vases";
import VaseList from "./components/VaseList";
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
  //const [show, setShow] = useState(0);

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
          <Points>Points:</Points>
        </LeftCol>
        {/* -----------------------------*/}
        <RightCol>
          <MainImage src={require("./Images/MainImage.jpeg").default} />
          <VaseList vases={vases} />

          {/* {show ? (
            <Vase1
              onLoad={useEffect}
              src={require("./Images/Vase.jpeg").default}
            />
          ) : null}
          {show ? (
            <Vase2
              onLoad={useEffect}
              src={require("./Images/Vase.jpeg").default}
            />
          ) : null}
          {show ? (
            <Vase3
              onLoad={useEffect}
              src={require("./Images/Vase.jpeg").default}
            />
          ) : null}
          {show ? (
            <Vase4
              onLoad={useEffect}
              src={require("./Images/Vase.jpeg").default}
            />
          ) : null}
          {show ? (
            <Vase5
              onLoad={useEffect}
              src={require("./Images/Vase.jpeg").default}
            />
          ) : null} */}
        </RightCol>
      </Row>
    </ThemeProvider>
  );
}

export default App;
