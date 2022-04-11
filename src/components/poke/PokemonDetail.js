import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Badge,
} from "shards-react";

const PokemonDetail = ({pokemon}) => {
  console.log(pokemon)
  let universalData = (pokemon || {})
  let pokeMoves = (pokemon.moves || [])
  let pokeTypes = pokemon.types ? pokemon.types.map((item, index)=>{
    return item.type
  }) : []
  return (
    <div>
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Pokemon Detail</h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <div className="d-flex align-items-center">
              <h5 className="pr-2">Name:</h5>
              <div className="pl-4">
                <h5 className="text-bold"> {universalData.name}</h5>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="pr-2">Base Experience:</h5>
              <h5 className="text-bold"> {universalData.base_experience}</h5>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="pr-2">Weight:</h5>
              <h5 className="text-bold"> {universalData.weight}</h5>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="pr-2">Types:</h5>
              {pokeTypes.map((poke,idx) => (
                <Badge
                  className="mx-2 my-2" 
                  key={idx} 
                  pill 
                  theme="info"
                  >
                  {poke.name}
                </Badge>
              ))}
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card>
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Pokemon Move</h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            {pokeMoves.map((poke,idx) => (
              <Badge
                className="mx-2 my-2" 
                key={idx} 
                pill
                >
                {poke.move.name}
              </Badge>
            ))}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
)}
export default PokemonDetail;