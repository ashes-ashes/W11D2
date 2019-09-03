import React from 'react';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({pokemon: this.props.requestPokemon(this.props.poke_id)});
  }

  render() {
    return (
      <div>{this.state.pokemon}</div>
    );
  }
}

export default PokemonIndexItem;