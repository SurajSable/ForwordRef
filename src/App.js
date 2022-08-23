import * as React from "react";
//import ReactDOM from "react-dom";
import Component from "./Component";

export default function App() {
  const ref = React.useRef();
  const play = () => {
    ref.current.play();
  };
  const pause = () => {
    ref.current.pause();
  };
  return (
    <div className="App">
      <Component ref={ref} />
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}
