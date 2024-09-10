function PokemonCardBasics({weight, height}) {
    return (
        <>
            <div className="basics-info">
                <div className="icon-color">
                    <i className="fas fa-weight" style={{ marginRight: '5px' }}></i>
                    {weight}
                </div>
                <div className="icon-color">
                    <i className="fas fa-ruler-vertical" style={{ marginRight: '5px' }}></i>
                    {height}
                </div>
            </div>
        </>
    )
}

export default PokemonCardBasics