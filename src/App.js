import React, {useState} from 'react';
import Timer from './components/DurationExercise'
import Duration from './components/RepetitionExercise'
import CreateDurationExercise from "./components/NewDuration"
import CreateRepetitionExercise from "./components/NewRepetition"

function App() {
  let [counter, changeCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Time to Exercise!</h1>
        <p>
          Select an Exercise:
        </p>
        <button>
          Pushups
          </button>
          <button>
          Running
          </button>
          <button>
          Planks
          </button>
    <Timer />
    <Duration />
      </header>
      <CreateDurationExercise></CreateDurationExercise>
      <CreateRepetitionExercise></CreateRepetitionExercise>
    </div>
  );
}

export default App;
