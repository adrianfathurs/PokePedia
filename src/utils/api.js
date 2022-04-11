import axios from "axios"

// This Base URL from restFull api pokeapi
export const BaseURL= "https://pokeapi.co/api/v2/"

export const httpClient = axios.create({
  baseURL: `${BaseURL}`,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
})

export const getPokemons = params => {
  return httpClient.get("/pokemon/", { params })
}
export const getPokemonByName = params => {
  return httpClient.get("/pokemon/" + params)
}