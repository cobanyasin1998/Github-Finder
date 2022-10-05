import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <p>Butona {this.state.count} kez Tıkladınız</p>
//         <button
//           onClick={() => this.setState({ count: this.state.count + 1 })}
//         >+1</button>
//       </div>
//     );
//   }
// }

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("kez Tıkladınız");
  return (
    <div>
      <p>
        Butona {count} {text}
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setText("KEZ TIKLADINIZ")}>Text Değiştir</button>
    </div>
  );
};
App.defaultProps = {
  count: 5,
};

// function App() {
//   return <div>Class Component</div>;
// }

ReactDOM.render(<App />, document.getElementById("root"));
