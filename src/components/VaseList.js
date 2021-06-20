import vases from "../vases";
import vaseImage from "../Images/Vase.jpeg";
import brokenVaseImage from "../Images/BrokenVase.jpeg";
import IncrementCount from "./Increment";
import { ListWrapper, Vase1, Vase2, Vase3, Vase4, Vase5 } from "../styles";
import { useState, useEffect } from "react";
import getRandomInt from "./OneImage";
const random = () => vases[Math.floor(Math.random() * vases.length)].id;
const VaseList = (props) => {
  const [hidden, setHidden] = useState(null);
  //   const [show, setShow] = useState(null);
  //   const changeImage = (e) => {
  //     e.target.setAttribute("src", "brokenVaseImage");
  //   };
  const doBoth = () => {
    IncrementCount();
    setHidden(0);
  };

  {
    useEffect(() => {
      const interval = setInterval(() => setHidden(view()), 7000);
    });
  }
  function view() {
    return random() === vases[0].id ? (
      <Vase1 onClick={() => doBoth()} id={props.vases[0].id} src={vaseImage} />
    ) : random() === vases[1].id ? (
      <Vase2
        onClick={() => setHidden(0)}
        id={props.vases[1].id}
        src={vaseImage}
      />
    ) : random() === vases[2].id ? (
      <Vase3
        onClick={() => setHidden(0)}
        id={props.vases[2].id}
        src={vaseImage}
      />
    ) : random() === vases[3].id ? (
      <Vase4
        onClick={() => setHidden(0)}
        id={props.vases[3].id}
        src={vaseImage}
      />
    ) : (
      <Vase5
        onClick={() => setHidden(0)}
        id={props.vases[4].id}
        src={vaseImage}
      />
    );
  }

  return <ListWrapper>{hidden}</ListWrapper>;
};

export default VaseList;

// require("../Images/Vase.jpeg").default
