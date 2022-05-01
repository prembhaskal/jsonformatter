import React from 'react'
import TextAreaComp from './TextAreaComp'

export default function OutputPanel() {
  return (
    <div className="middle aligned column">
      <div className="column">
        <div className="ui form">
          <div className="field">
            <label>Output</label>
            <div className="ui massive icon input">
              <TextAreaComp />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
