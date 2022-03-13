import React from 'react'

const PokemonCard = ({ pokemons, loading, pokemonInfo }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemons.map((pokemon) => {
          return (
            <>
              <div className='card' key={pokemon.id} onClick={() => pokemonInfo(pokemon)}>
                <h2>{pokemon.id}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h2>{pokemon.name}</h2>
              </div>
            </>
          )
        })
      )}
    </>
  )
}

export default PokemonCard
