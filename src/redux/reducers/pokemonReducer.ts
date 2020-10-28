import {
  PokemonDispatchTypes,
  PokemonType,
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
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
  switch (action.type) {
    case POKEMON_FAIL:
      state = {
        ...state,
        loading: false,
      };
      return state;
    case POKEMON_LOADING:
      state = {
        ...state,
        loading: true,
      };
      return state;
    case POKEMON_SUCCESS:
      state = {
        ...state,
        loading: false,
        pokemon: action.payload,
      };
      return state;
    default:
      return state;
  }
};

export default pokemonReducer;
