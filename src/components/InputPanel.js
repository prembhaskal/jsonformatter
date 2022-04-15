import React from 'react'

export default function InputPanel() {
  return (
    <div className="column">
      <div className="ui form">
        <div className="field">
          <label>Input</label>
          <div className="ui massive icon input">
            <input type="text" placeholder="Add your JSON here" />
            
          </div>
        </div>

        
      </div>
    </div>
  )
}
