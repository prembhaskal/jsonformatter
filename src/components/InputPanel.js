import React from 'react'
import TextAreaIn from './TextAreaIn'

export default function InputPanel(props) {
  return (
    <div className="column">
      <div className="ui form">
        <div className="field">
          <label>Input</label>
          <div className="ui massive icon input">
            <TextAreaIn  inputValue={props.input} />
          </div>
        </div>


      </div>
    </div>
  )
}
