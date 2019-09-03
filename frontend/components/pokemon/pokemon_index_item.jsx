import React from 'react';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <img src={this.props.pokemon.image_url}></img>
        <span>{this.props.pokemon.name}</span>
      </li>
    );
  }
}

export default PokemonIndexItem;