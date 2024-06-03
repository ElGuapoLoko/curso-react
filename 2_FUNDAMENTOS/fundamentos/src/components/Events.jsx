const Events = () => {
    const handleMyEvent = () => {
        // se colocar os () no html ele inicia a função quando carregar a pagina e não quando clicar
        console.log("teste")
    }

    const renderSomething = (x) =>{
        if(x){
            return <h1>Reinderizando isso</h1>;
        }else{
            return <h1>Também posso reinderizar isso</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() =>{
                    if(true){
                        console.log("rodando dentro do html")
                    }
                }}>Clique aqui tb</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
};

export default Events;
