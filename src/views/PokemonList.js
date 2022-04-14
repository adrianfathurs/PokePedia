import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, CardBody, Button } from "shards-react";
import PageTitle from "./../components/common/PageTitle";
import  { getPokemons } from "../utils/api"

const PokemonList = ({ smallStats, history }) => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonsCount, setPokemonsCount] = useState([])

  const getPokemonsData =  async(number) => {
    try {
      let params = number === undefined ? { limit: 20, offset: 0 } :  { limit: number, offset: number }
      let response = await getPokemons(params);
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
      <Col lg="1" md="6" sm="12" className="col-sm mb-1">
        <Card small className="card card-1">
            <CardBody>
              <h5 className="card-title d-flex align-items-center">
                {pokemonsCount}
              </h5>
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
            <Card small className="card card-1">
              <CardBody>
                <h5 className="card-title">
                  {poke.name}
                </h5>
                <p className="card-text d-inline-block mb-3"> </p>
                <span className="text-muted"></span>
                <Button outline  onClick={() => { history.push('/pokemon-overview/' + poke.name) }}>Go To Detail Poke</Button>
              </CardBody>
            </Card>
        </Col>
      ))}
    </Row>
  </Container>
)};


export default PokemonList;
