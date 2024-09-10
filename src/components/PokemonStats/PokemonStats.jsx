import Atk from './Atk'
import Def from './Def'
import Hp from './Hp'
import Satk from './Satk'
import Sdef from './Sdef'
import Spd from './Spd'

function PokemonStats({hp, atk, def, satk, sdef, spd}) {
    return (
        <>
            <Hp value={hp}/>
            <Atk value={atk}/>
            <Def value={def}/>
            <Satk value={satk}/>
            <Sdef value={sdef}/>
            <Spd value={spd}/>
        </>
    )
}

export default PokemonStats