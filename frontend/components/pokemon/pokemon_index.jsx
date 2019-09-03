import React from 'react';

import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({pokemon: this.props.requestAllPokemon()});
  }

  render() {
    return (
      <ul>
        {this.props.pokemon.map((pokemon) => {
          return <PokemonIndexItem key={poke.id} pokemon={pokemon} />;
        })}
      </ul>
    )
  }
}

export default PokemonIndex;