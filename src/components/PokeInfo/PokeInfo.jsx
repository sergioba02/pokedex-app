import TypeLabel from './TypeLabel'
import PokemonCardBasics from './PokemonCardBasics'
import CardDescription from './CardDescription'
import BaseStats from './BaseStats'


function PokeInfo() {
    return (
        <>
            <div className="poke-info">
                <TypeLabel type={'Water'} />
                <PokemonCardBasics weight={'5.9 kg'} height={'0.5m'} />
                <CardDescription />
                <BaseStats />
            </div>
        </>
    )
}

export default PokeInfo