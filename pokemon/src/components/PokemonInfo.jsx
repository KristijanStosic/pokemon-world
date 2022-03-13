import React from 'react'

const PokemonInfo = ({ pokemonInfo }) => {
  return (
    <>
      {!pokemonInfo ? (
        ''
      ) : (
        <>
          <h1>{pokemonInfo.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonInfo.id}.svg`}
            alt={pokemonInfo.name}
          />
          <div className='abilities'>
            {pokemonInfo.abilities.map((pokemon) => {
              return (
                <>
                  <div className='group'>
                    <h2>{pokemon.ability.name}</h2>
                  </div>
                </>
              )
            })}
          </div>
          <div className='base-stat'>
            {pokemonInfo.stats.map((pokemon) => {
              return (
                <>
                  <h3>
                    {pokemon.stat.name}:{pokemon.base_stat}
                  </h3>
                </>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default PokemonInfo
