import { Dispatch } from "redux";
import axios from "axios";
import {
  PokemonDispatchTypes,
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from "./pokemonActionTypes";

export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  try {
    dispatch({ type: POKEMON_LOADING, pa: "asd" });

    const res = await axios.get(`https://pokeapi/api/v2/pokemon/${pokemon}`);
    console.log(res);

    dispatch({ type: POKEMON_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: POKEMON_FAIL });
  }
};
