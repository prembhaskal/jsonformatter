
import '../App.css';
import Header from './Header';
import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';

function App() {
  return (
    <>
      <Header></Header>
      <div className="ui placeholder segment">
  <div className="ui two column very relaxed stackable grid">
    <InputPanel />
    <OutputPanel />
  </div>
  <div className="ui vertical divider">
    <button className='ui blue submit button' >Convert</button>
  </div>
</div>

    </>
  );
}

export default App;
