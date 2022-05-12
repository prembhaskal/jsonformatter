import React from 'react'
import TextAreaIn from './TextAreaIn'

export default class InputPanel extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
      console.log(`InputPanel handleChange called ${text}`);
      this.props.updateInputText(text);
  }

  render() {
    return (
      <div className="column">
        <div className="ui form">
          <div className="field">
            <label>Input</label>
            <div className="ui massive icon input">
              <TextAreaIn inputValue={this.props.input} updateInputText={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
