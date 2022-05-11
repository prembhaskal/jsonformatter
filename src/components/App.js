
import '../App.css';
import Header from './Header';
import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';
import React, { useState } from "react";

function App() {
    const convert = () => {
    alert('hi');
  }

  const [input] = useState("")
  return (
    <>
      <Header></Header>
      <div className="ui placeholder segment">
  <div className="ui two column very relaxed stackable grid">
    <InputPanel inputValue={input}/>
    <OutputPanel text='{"one": "ONE", "child1":{"two": "TWO"}}'/>
  </div>
  <div className="ui vertical divider">
    <button className='ui blue submit button' onClick={convert}>Convert</button>
  </div>
</div>

    </>
  );
}

export default App;
