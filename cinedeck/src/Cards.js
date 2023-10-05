import './Cards.css'

function Cards(props) {
    let estrellas= '⭐'.repeat(props.stars)
    return(// JSX nos permite escribir html dentro de js
        <h4 className='Cards-card'>
            {props.titleMovie} Date {props.dateMovie.split('-')[0]} {estrellas}
        </h4>
    )
}

export default Cards; 