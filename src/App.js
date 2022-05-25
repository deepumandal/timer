import logo from './logo.svg';
import './App.css';
import Timer from './comp/Timer';
function App() {
//console.log(Timer)
  return (
    <div className="App">
     <Timer start={0} />
    </div>
  );
}

export default App;
