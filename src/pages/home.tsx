import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../redux/actions/pokemonAction";
import { RootStoreType } from "../redux/store/store";
import MuiCard from "../components/MuiCard";
import { Link } from "@material-ui/core";

function Home() {
  const pokemonState = useSelector((state: RootStoreType) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPokemon("1"));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography variant="h4" component="h1">
          React Redux Typescript Setup
        </Typography>
        <Typography variant="body1">
          This app is an example how to make redux and typescript work well
          together.
        </Typography>
        <Typography variant="body1">
          <Link href="https://react-redux-typescript-setup.netlify.app">
            Source code on github.
          </Link>
        </Typography>
        <Typography variant="body1">
          When you enter this page there is a call to
          https://pokeapi.co/api/v2/pokemon api.
        </Typography>

        <Typography variant="h5" component="h2">
          And this is a result.
        </Typography>
        {pokemonState.pokemon && (
          <MuiCard
            imageUrl={pokemonState.pokemon.sprites.front_default}
            pokemon={pokemonState.pokemon}
          />
        )}
      </Container>
    </React.Fragment>
  );
}

export default Home;
