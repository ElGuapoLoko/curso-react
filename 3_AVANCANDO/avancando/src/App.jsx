import {useState} from 'react'
import './App.css'
import React from "./assets/react.svg"
import ManageDataComponent from "./components/ManageDataComponent.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="App">
                <h1>Avançando no react</h1>
                {/* Imagem em public*/}
                <img src="/vite.svg" alt="Paisagem"/>

                {/* Imagem em Assets*/}
                <img src={React} alt="React"/>


                <ManageDataComponent></ManageDataComponent>
            </div>
        </>
    )
}

export default App
