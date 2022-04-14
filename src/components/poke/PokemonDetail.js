import React from "react";
import { useSelector} from 'react-redux'
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Badge,
} from "shards-react";
import '../../assets/css/PokeDetail.css';

const PokemonDetail = ({pokemon}) => {
  const poke_type_colors = useSelector((state)=> state.poke_type_colors)
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
              <h5 className="text-bold">Name:</h5>
              <div className="ml-2">
                <h5 className=""> {universalData.name}</h5>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="text-bold">Base Experience:</h5>
              <h5 className="ml-1"> {universalData.base_experience}</h5>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="text-bold">Weight:</h5>
              <h5 className="ml-2"> {universalData.weight}</h5>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="text-bold">Types:</h5>
              {pokeTypes.map((poke,idx) => (
                <Badge
                  className="ml-2 my-2" 
                  key={idx} 
                  pill 
                  theme="info"
                  style={{backgroundColor: poke_type_colors[poke.name] }}
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