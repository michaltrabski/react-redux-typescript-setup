import {
  PokemonDispatchTypes,
  PokemonType,
} from "../actions/pokemonActionTypes";

interface DefaultStatePokemon {
  loading: boolean;
  pokemon?: PokemonType;
}

const defaultStatePokemon = {
  loading: false,
};

const pokemonReducer = (
  state: DefaultStatePokemon = defaultStatePokemon,
  action: PokemonDispatchTypes
): DefaultStatePokemon => {
  return state;
};

export default pokemonReducer;
