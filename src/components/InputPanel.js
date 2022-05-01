import React from 'react'
import TextAreaComp from './TextAreaComp'

export default function InputPanel() {
  return (
    <div className="column">
      <div className="ui form">
        <div className="field">
          <label>Input</label>
          <div className="ui massive icon input">
            <TextAreaComp />
          </div>
        </div>


      </div>
    </div>
  )
}
