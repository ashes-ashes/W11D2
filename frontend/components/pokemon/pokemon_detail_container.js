import React from 'react';
import { requestPokemon } from '../../actions/pokemon_actions';

import PokemonDetail from './pokemon_detail.jsx';

const mapStatetoProps = state => ({
  poke_id: this.props.match.params.poke_id
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: () => dispatch(requestPokemon())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(PokemonDetail);
