import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { useSelector, useDispatch} from 'react-redux'
const MyPokemonList = ({history}) => {
  let dispatch = useDispatch()
  let myPokemon = useSelector((state) =>  state.myPokemon)
  const handleRelease = (index) => {
    dispatch({type:'HANDLE_REMOVE_MY_POKEMON', index: index})
    if (myPokemon.length <= 1) {
      localStorage.removeItem('pokemon')
    }else {
      localStorage.setItem('pokemon', JSON.stringify(myPokemon))
    }
  }
  return (
    <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="My Pokemon List" subtitle="Let's See" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">My Active Pokemon</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    My Poke Name
                  </th>
                  <th scope="col" className="border-0">
                    Poke Name
                  </th>
                  <th scope="col" className="border-0">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                { myPokemon.map((poke, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{poke.myPokeName}</td>
                    <td>{poke.pokeName}</td>
                    <td>
                      <div className='mx-auto'>
                      <Button outline onClick={() => { history.push('/pokemon-overview/' + poke.pokeName) }}>Go To Detail Poke</Button>
                      <Button outline theme="danger" className="ml-2 mt-1" onClick={() => handleRelease(index)}> Release </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </Container>
  )
}

export default MyPokemonList;