import './App.css'
import FirstComponent from "./components/FirstComponent.jsx";
import Events from "./components/Events.jsx";
import ChallengeComponent from "./components/ChallengeComponent.jsx";

function App() {

  return (
    <>
        <div className="App">
            <h1>Fundamentos React</h1>
        </div>
        <FirstComponent></FirstComponent>
        <Events></Events>
        <ChallengeComponent></ChallengeComponent>
    </>
  )
}

export default App
