
import '../App.css';
import Header from './Header';
import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';
import React from "react";
import ConvertPanel from './ConvertPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "{}",
      prettyJSON: "{}"
    }

    this.handleChange = this.handleChange.bind(this);
    this.updatePrettyJSON = this.updatePrettyJSON.bind(this);
  }

  handleChange(text) {
    this.setState({
      text: text
    });
  }

  updatePrettyJSON(text) {
    this.setState({
      prettyJSON: text
    });
  }

  render() {
    return (
      <div>
        <Header>JSON formatter</Header>
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <InputPanel inputValue={this.state.text} updateInputText={this.handleChange} />
            <OutputPanel text={this.state.prettyJSON} />
          </div>
          <div className="ui vertical divider">
            <ConvertPanel text={this.state.text} updatePrettyJSON={this.updatePrettyJSON} />
          </div>
        </div>
      </div>
    );
  }
}
