import React from "react"
import PropTypes from "prop-types"
import Carousel from 'react-bootstrap/Carousel'
import {connect} from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

import '../../assets/css/PokeCard.css'
import {
  Card,
  CardHeader,
  Button,
} from "shards-react";

const PokeCard = ( {pokemon} ) => {
  let data = (pokemon.sprites || {});
  let pokemonSprites = [
    data.back_default,
    data.back_female,
    data.back_shiny,
    data.back_shiny_female,
    data.front_default,
    data.front_female,
    data.front_shiny,
    data.front_shiny_female, 
  ]
  const dispatch = useDispatch()
  return(
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <Carousel className="mb-2">
        {pokemonSprites.map((pokeSprites, index) => ( 
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={pokeSprites ? pokeSprites : "https://dummyimage.com/600x600/000/5f63a3" }
              fluid="true"
              />
          </Carousel.Item>
        ))}
      </Carousel>
      <Button pill outline size="sm" onClick={()=>dispatch({type:'HANDLE_MODAL_TOOLTIP', value:true, pokeId: pokemon.id, pokeName: pokemon.name })} className="mb-2">
        <i className="material-icons mr-1">catching_pokemon</i> Catch Pokemon
      </Button>
      
    </CardHeader>
  </Card>
)}

const mapStateToProps = (state)=> {
  return {
    modal: state.modal
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleCatchPoke: () => dispatch({type:'HANDLE_MODAL'}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PokeCard);
