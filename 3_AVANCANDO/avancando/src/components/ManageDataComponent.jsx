import {useState} from "react";

const ManageDataComponent = () => {
    let someData = 10;
    const [number, setNumber] = useState(15);

    return (
        <div>
            <div>
                <h1>Valor: {someData}</h1>
                <button onClick={() => (someData = 75)}>Clique aqui</button>
            </div>
            <div>
                <h1>Valor: {number}</h1>
                <button onClick={() => setNumber(75)}>Clique aqui</button>
            </div>
        </div>
    )
}
export default ManageDataComponent;
