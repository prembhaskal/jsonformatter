import React from 'react'
import CopyToClip from './CopyToClip'
import TextAreaOut from './TextAreaOut'
import { prettifyJSONString } from './../module/jsonutil.js'

export default class OutputPanel extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.text !== nextProps.text
  }

  render() {
    this.prettyJSON = prettifyJSONString(this.props.text);
    console.log('pretty JSON is :', this.prettyJSON);

    return (
      <div className="middle aligned column">
        <div className="column">
          <div className="ui form">
            <div className="field">
              <label>Output</label>
              <div className="ui massive icon input">
                <TextAreaOut text={this.prettyJSON} />
              </div>
              <div>
                <CopyToClip text={this.prettyJSON} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
