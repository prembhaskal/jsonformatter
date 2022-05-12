import React from 'react'
import CopyToClip from './CopyToClip'
import TextAreaOut from './TextAreaOut'

export default class OutputPanel extends React.Component {
  render() {
    return (
      <div className="middle aligned column">
        <div className="column">
          <div className="ui form">
            <div className="field">
              <label>Output</label>
              <div className="ui massive icon input">
                <TextAreaOut text={this.props.text} />
              </div>
              <div>
                <CopyToClip text={this.props.text} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
