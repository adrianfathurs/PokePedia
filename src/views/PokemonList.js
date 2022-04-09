import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardBody } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import  { getPokemons } from "../utils/api"

const PokemonList = ({ smallStats }) => {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(0)
  const [offset, setOffset] = useState(0)
  const [pokemonsCount, setPokemonsCount] = useState([])

  const getPokemonsData =  async(number) => {
    try {
      let params = number === undefined ? { limit: 20, offset: 0 } :  { limit: number, offset: number }
      let response = await getPokemons(params);
      console.log(response.data.results)
      setPokemons(pokemons.concat(response.data.results))
      setPokemonsCount(response.data.count)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemonsData() 
  }, [])

  return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Total Pokemons List" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

    {/*Count All Pokemons */}
    <Row>
      <Col lg="3" md="6" sm="12" className="col-sm mb-4">
        <Card small className="card card-1">
            <CardBody>
              <h5 className="card-title">
                {pokemonsCount}
              </h5>
              <p className="card-text d-inline-block mb-3"> </p>
              <span className="text-muted"></span>
            </CardBody>
          </Card>
      </Col>
    </Row>
    {/* Sub Page header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="All Pokemons List" subtitle="" className="text-sm-left mb-3" />
    </Row>

    {/* Pokemon Card */}
    <Row>
      {pokemons.map((poke, idx) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
          <a href={poke.url} className="text-fiord-blue">
            <Card small className="card card-1">
              <CardBody>
                <h5 className="card-title">
                  {poke.name}
                </h5>
                <p className="card-text d-inline-block mb-3"> </p>
                <span className="text-muted"></span>
              </CardBody>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  </Container>
)};


export default PokemonList;
