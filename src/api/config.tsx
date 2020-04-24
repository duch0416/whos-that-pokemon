import axios from "axios"

export const pokedex = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export const pokImg = axios.create({
    baseURL: "https://pokeres.bastionbot.org/images/pokemon/"
})
