import React from "react";
class App extends React.Component {
  render() {
    return (
      <div>
        <input />
        <button onClick={() => this.handle()}>add</button>
        <button onClick={() => this.handle1()}>add</button>
        <button onClick={this.handle2}>add</button>
      </div>
    );
  }
  handle() {
    console.log("add");
  }
  handle1 = () => {
    console.log("add1");
  };
  handle2 = () => {
    console.log("add2");
  };
}

export default App;

// export default function App() {
//   function handle() {
//     console.log("add");
//   }
//   return (
//     <div>
//       <input />
//       <button onClick={() => handle()}>add</button>
//     </div>
//   );
// }
