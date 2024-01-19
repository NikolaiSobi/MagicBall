import './App.css'
import EightBall from './EightBall'
import EightBallAnswers from "./EightBallAnswers"

function App() {
  return (
    <div className="App">
        <EightBall className="EightBall" answers={EightBallAnswers} />
    </div>
  );
}

export default App;
