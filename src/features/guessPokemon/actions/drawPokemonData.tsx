import { getPokemonList } from "../../../api/actions";

type Pokemon = {
    name:string, 
    url:string
}


export const drawPokemonData = async () => {
  const pokList = await getPokemonList();
  const pokemonId: number = Math.floor(Math.random() * pokList.length);
  const pokemonName: string | undefined = getPokemonName(pokList, pokemonId);

  return {pokemonName, pokemonId}
};

const cutIdFromUrl = (pok:any) => {
    const stringId = pok.url.split("/pokemon").splice(1,1).join("");
    return parseInt(stringId.split("").splice(1, stringId.length-2).join(""))
}

const getPokemonName = (pokList: Array<Pokemon>, pokemonId: number) => {
    const pokName:Pokemon | undefined = pokList.find((pok: Pokemon) => {
        const id = cutIdFromUrl(pok)
        if(pokemonId === id) {
            return pok.name
        }
    })
    
    return pokName?.name
}
