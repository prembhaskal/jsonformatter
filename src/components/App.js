
import '../App.css';
import Header from './Header';
import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';
import React from "react";

// function App() {
export default class App extends React.Component {
  // convert = () => {
  //   alert('hi');
  // };

  constructor(props) {
    super(props);
    this.state = {
      text: "{}",
      toConvertText: "{}"
    } 

    this.handleChange = this.handleChange.bind(this);
    this.convert = this.convert.bind(this);
  }

  handleChange(text) {
    console.log(`App.js handleChange called ${text}`);
    this.setState({
      text: text
    });
  }

  convert(text) {
    this.setState({
      toConvertText: this.state.text
    });
  }

  render() {
    let toConvertText = this.state.toConvertText;
    return (
      <div>
        <Header></Header>
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <InputPanel inputValue={this.state.text} updateInputText={this.handleChange} />
            <OutputPanel text={toConvertText} />
          </div>
          <div className="ui vertical divider">
            <button className='ui blue submit button' onClick={this.convert}>Convert</button>
          </div>
        </div>
      </div>
    );
  }
}

// export default App;
