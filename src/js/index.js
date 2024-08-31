//import react into the bundle
import React from "react";
import { createRoot } from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="far fa-clock"></i>
      </div>
      <div className="four">{props.digitFour % 10}</div>
      <div className="three">{props.digitThree % 10}</div>
      <div className="two">{props.digitTwo % 10}</div>
      <div className="one">{props.digitOne % 10}</div>
    </div>
  );
}

let counter = 0;
const root = createRoot(document.querySelector("#app"));
setInterval(function () {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  counter++;
  root.render(
    <SimpleCounter
      digitFour={four}
      digitThree={three}
      digitTwo={two}
      digitOne={one}
    />
  );
}, 1000);
