import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }

  render() {
    return <div>Hello, {this.state.name}!</div>;
  }
}

export default App;
