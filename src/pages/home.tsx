import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../redux/actions/pokemonAction";
import { RootStoreType } from "../redux/store/store";

function Home() {
  const pokemonState = useSelector((state: RootStoreType) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPokemon("1"));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div>
        pokemonState.pokemon={" "}
        {JSON.stringify(pokemonState.pokemon?.sprites?.front_default)}
      </div>

      {/* <div>pokemonState = {JSON.stringify(pokemonState)}</div> */}
    </>
  );
}

export default Home;
