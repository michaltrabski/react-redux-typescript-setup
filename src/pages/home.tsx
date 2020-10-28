import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../redux/actions/pokemonAction";
import { RootStoreType } from "../redux/store/store";
import MuiCard from "../components/MuiCard";

function Home() {
  const pokemonState = useSelector((state: RootStoreType) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPokemon("1"));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ backgroundColor: "#cfe8fc" }}>
        {/* <Typography component="div" /> */}

        {pokemonState.pokemon && (
          <MuiCard imageUrl={pokemonState.pokemon.sprites.front_default} />
        )}

        <div>
          pokemonState.pokemon={" "}
          {JSON.stringify(pokemonState.pokemon?.sprites?.front_default)}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Home;
