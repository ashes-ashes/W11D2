import React from 'react';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetail from './pokemon_detail';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({pokemon: this.props.requestAllPokemon()});
  }
  
  render() {
    const pokemonItems = this.props.pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));
    return (
      <section className="pokedex">
        <Route path="/pokemon/:poke_id" component={PokemonDetailContainer} />
        <ul>{pokemonItems}</ul>
      </section>
    )
  }
}

export default PokemonIndex;