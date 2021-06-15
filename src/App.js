import "./App.css";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>Link's dream</Header>
      <Row>
        <LeftCol>
          <Time>Time</Time>
          <Points>Points</Points>
        </LeftCol>
        <RightCol>
          <MainImage src={require("./Images/MainImage.jpeg").default} />
        </RightCol>
      </Row>
    </ThemeProvider>
  );
}

export default App;
