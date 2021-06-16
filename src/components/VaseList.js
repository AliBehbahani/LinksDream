import vases from "../vases";
import { ListWrapper, Vase1, Vase2, Vase3, Vase4, Vase5 } from "../styles";
import { useState, useEffect } from "react";
import getRandomInt from "./OneImage";
const random = () => vases[Math.floor(Math.random() * vases.length)].id;
const VaseList = (props) => {
  const [hidden, setHidden] = useState(null);
  //   useEffect(() => {
  //     let x = 13;
  //     const interval = setInterval(() => console.log(x), 2000);
  //   });
  {
    useEffect(() => {
      const interval = setInterval(() => setHidden(view()), 10000);
    });
  }
  function view() {
    return random() === vases[0].id ? (
      <Vase1
        id={props.vases[0].id}
        src={require("../Images/Vase.jpeg").default}
      />
    ) : random() === vases[1].id ? (
      <Vase2
        id={props.vases[1].id}
        src={require("../Images/Vase.jpeg").default}
      />
    ) : random() === vases[2].id ? (
      <Vase3
        id={props.vases[2].id}
        src={require("../Images/Vase.jpeg").default}
      />
    ) : random() === vases[3].id ? (
      <Vase4
        id={props.vases[3].id}
        src={require("../Images/Vase.jpeg").default}
      />
    ) : (
      <Vase5
        id={props.vases[4].id}
        src={require("../Images/Vase.jpeg").default}
      />
    );
  }

  return <ListWrapper>{hidden}</ListWrapper>;
};

export default VaseList;
