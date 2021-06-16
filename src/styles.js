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
// --------
export const Vase1 = styled.img`
  width: 100px;
  display: inline-block;
  position: absolute;
  top: 140px;
  right: 225px;
`;
export const Vase2 = styled.img`
  width: 100px;
  display: inline-block;
  position: absolute;
  top: 140px;
  right: 415px;
`;
export const Vase3 = styled.img`
  width: 100px;
  display: inline-block;
  position: absolute;
  top: 140px;
  right: 615px;
`;
export const Vase4 = styled.img`
  width: 100px;
  display: inline-block;
  position: absolute;
  top: 340px;
  right: 520px;
`;
export const Vase5 = styled.img`
  width: 100px;
  display: inline-block;
  position: absolute;
  top: 340px;
  right: 325px;
`;
export const ListWrapper = styled.div`
  display: inline-block;
  position: absolute;
  width: 100px;
`;
