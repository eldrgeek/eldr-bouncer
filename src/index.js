import React from "react";
import ReactDOM from "react-dom";
import Survey from "./Surveys/CarSurvey";

import "./styles.css";
import styled, { keyframes } from "styled-components";
import { bounceInDown, bounceOutUp } from "react-animations";
// import { tsImportEqualsDeclaration } from "@babel/types";

const BouncyDiv = styled.div`
  animation: ${props => props.duration} ${props => props.animation};
`;
let bouncyElement = null;

const MidDiv = styled.div`
  top: 300px;
  left: 100px;
  position: absolute;
  height: 00px;
`;
let counter = 0;
let hideListener = () => {
  window.myElement = bouncyElement;
  console.log("hiding");
  bouncyElement.style.visibility = "hidden";
};

let Bouncer = (props, children) => {
  let inOut = props.inOut;
  let setRef = element => {
    if (bouncyElement === null) {
      bouncyElement = element;
    }
    bouncyElement.style.visibility = "visible";
    if (inOut === "out") {
      bouncyElement.addEventListener("animationend", hideListener);
    } else {
      bouncyElement.removeEventListener("animationend", hideListener);
    }
    // // bouncyElement.addEventListener("animationend", listener);
  };

  // let timeOutInterval = inOut === "in" ? 4000 : 1000

  // console.log("setTimeout", ++counter);
  // setTimeout(() => {
  //   console.log("in timeout", ++counter);
  //   bouncyElement.style.visibility = "visible";
  //   if (inOut === "in") {
  //     setInOut("out");
  //   } else {
  //     setInOut("in");
  //   }
  // }, timeOutInterval);

  const bounceAnimation = keyframes`${
    inOut === "in" ? bounceInDown : bounceOutUp
  }`;
  return (
    <MidDiv>
      <BouncyDiv
        ref={setRef}
        id="bouncydiv"
        className="App"
        duration="1s"
        animation={bounceAnimation}
      >
        {props.children}
      </BouncyDiv>
    </MidDiv>
  );
};

let App = () => {
  const [inOut, setInOut] = React.useState("in");
  let bounceIn = () => {
    setInOut("in");
  };
  let bounceOut = () => {
    setInOut("out");
  };
  return (
    <Bouncer inOut={inOut}>
      <Survey bounceIn={bounceIn} bounceOut={bounceOut} />
    </Bouncer>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
