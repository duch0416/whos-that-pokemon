import {pokedex, pokImg} from "./config"

export const getPokemonList = async () => {
    return (await pokedex.get("pokemon/?offset=0&limit=807")).data.results
}

export const getPokemonImg = async (id: number) => {
    return await (await pokImg.get(`${id}.png`)).data
}