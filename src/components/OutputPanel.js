import React from 'react'
import CopyToClip from './CopyToClip'
import TextAreaOut from './TextAreaOut'
import { prettifyJSONString } from './../module/jsonutil.js'

export default class OutputPanel extends React.Component {

  render() {
    let prettyJSON = prettifyJSONString(this.props.text)

    console.log('pretty JSON is :', prettyJSON)
    return (
      <div className="middle aligned column">
        <div className="column">
          <div className="ui form">
            <div className="field">
              <label>Output</label>
              <div className="ui massive icon input">
                <TextAreaOut text={prettyJSON} />
              </div>
              <div>
                <CopyToClip text={prettyJSON} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
