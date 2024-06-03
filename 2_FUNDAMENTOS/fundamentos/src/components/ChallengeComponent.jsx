const ChallengeComponent = () => {
    const a = 10;
    const b = 50;

    return (
        <div>
            <div>
                <h2>Valor de A: {a}</h2>
                <h2>Valor de B: {b}</h2>
            </div>
            <div>
                <button onClick={()=>{console.log(a +b);}}>Somar</button>
            </div>
        </div>
    )
};

export default ChallengeComponent;
