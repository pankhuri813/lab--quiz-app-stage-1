// import logo from './logo.svg';
import './App.css';
import Quizzapp from './components/quizzapp';
import Quizzapp2 from './components/quizzapp2';
import Qquizzapp3 from './components/qquizzapp3';

function App() {
  return (
    <div className="App">
      <div className='front'>
      <Quizzapp/>
      </div>
      <div className='mid'>
      <Quizzapp2/>
      </div>
      <div className='end'>
      <Qquizzapp3/>
      </div>
    </div>
  );
}

export default App;
