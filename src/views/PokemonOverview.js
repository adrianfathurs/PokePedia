import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "shards-react";

import PokeCard from '../components/poke/PokeCard';
import PokeTooltip from '../components/poke/PokeTooltip';
import PokeModal from '../components/poke/PokeModal';
import PokemonDetail from '../components/poke/PokemonDetail';
import PageTitle from './../components/common/PageTitle';
import { getPokemonByName } from '../utils/api';
const PokemonOverview = ({ match }) => {
  const [pokemon, setPokemon] = useState({})
  const getPokemonByNameData =  async() => {
    try {
      let response = await getPokemonByName(match.params.name)
      setPokemon(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPokemonByNameData()
  }, []);
  return(
    <Container fluid className="main-content-container px-4">
      <PokeTooltip></PokeTooltip>
      <PokeModal></PokeModal>
      <Row noGutters className="page-header py-4">
        <PageTitle title="Pokemon Overview" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        <Col lg="4">
          <PokeCard pokemon = { pokemon } />
        </Col>
        <Col lg="8">
          <PokemonDetail pokemon = { pokemon }/>
        </Col>
      </Row>
    </Container>
  )
}

export default PokemonOverview;