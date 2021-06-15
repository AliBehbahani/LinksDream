import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
${"" /* ---------------------------------------- */}
body{  color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
    
    }
`;
// -------------------------------------------------
export const Header = styled.h1`
  text-align: center;
`;

export const Row = styled.div`
  class: "row";
`;
// ----------
export const LeftCol = styled.div`
  class: "col = 2";
  float: left;
`;
export const Time = styled.h2``;
export const Points = styled.h2``;
// ------------
export const RightCol = styled.div`
  class: "col = 10";
  float: right;
`;
export const MainImage = styled.img`
  width: 700px;
  padding: 20px;
`;
