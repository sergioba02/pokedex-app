import BaseStatsTitle from './BaseStatsTitle'
import PokemonStats from '../PokemonStats/PokemonStats'

function BaseStats() {
    return (
        <>
            <div className="base-stats">
                <BaseStatsTitle title={'Base Stats'}/>
                <PokemonStats hp={45} atk={49} def={49} satk={65} sdef={65} spd={45}/>
            </div>
        </>
    )
}

export default BaseStats