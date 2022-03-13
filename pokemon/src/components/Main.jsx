import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import PokemonInfo from './PokemonInfo'
import axios from 'axios'

const Main = () => {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [pokemonInfo, setPokemonInfo] = useState()

  const getPokemons = async () => {
    setLoading(true)
    const res = await axios.get(url)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    getPokemon(res.data.results)
    setLoading(false)
  }

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      setPokemonData((state) => {
        state = [...state, result.data]
        state.sort((a, b) => (a.id > b.id ? 1 : -1))
        return state
      })
    })
  }

  useEffect(() => {
    getPokemons()
  }, [url])

  return (
    <>
      <div className='container'>
        <div className='left-content'>
          <PokemonCard
            pokemons={pokemonData}
            loading={loading}
            pokemonInfo={(pokemon) => setPokemonInfo(pokemon)}
          />

          <div className='btn-group'>
            {prevUrl && (
              <button
                onClick={() => {
                  setPokemonData([])
                  setUrl(prevUrl)
                }}
              >
                Previous
              </button>
            )}
            {nextUrl && (
              <button
                onClick={() => {
                  setPokemonData([])
                  setUrl(nextUrl)
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className='right-content'>
          <PokemonInfo pokemonInfo={pokemonInfo} />
        </div>
      </div>
    </>
  )
}

export default Main
