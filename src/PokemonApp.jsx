import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunk"

export const PokemonApp = () => {

    const { pokemons, isLoading, page } = useSelector(state => state.pokemons)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons())

    }, [])


    return (
        <>
            <h1>Pokemon</h1>
            <hr />
            <span>Loading: {isLoading ? 'Verdadero' : 'Falso'}</span>
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.name}>
                        <h2>{pokemon.name}</h2>
                    </li>
                ))}
            </ul>
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >
                Siguiente
            </button>
        </>
    )
}
