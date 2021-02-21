import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    showMessage: false
  };
  onButtonClickHandler = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  render() {
    return (
      <div className="App">
        {this.state.showMessage && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
        <button onClick={this.onButtonClickHandler}>Enter</button>
      </div>
    );
  }
}

export default App;