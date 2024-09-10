import PokeInfo from './PokeInfo/PokeInfo'
import CardHeader from './CardHeader'
import CardImg from './CardImg'

function Card() {
    return (
        <>
            <div className="card">
                <CardHeader name={'Oshawott'} id={501} />
                <CardImg url={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png'} alt={'Oshawott'} />
                <PokeInfo />
            </div>
        </>
    )
}

export default Card