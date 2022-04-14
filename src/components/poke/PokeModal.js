import React, {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'

import {
  Modal,
  Button,
  Form,
} from 'react-bootstrap'

const PokeModal = () => {
  const [myPokeName,setPokeName] = useState("")

  let statusModal = useSelector((state) =>  state.modal )
  let pokeId = useSelector((state) =>  state.pokeId )
  let pokeName = useSelector((state) =>  state.pokeName )
  const dispatch = useDispatch()
  
  const handleSubmit= ()=> {
  let pokeLocalStorage = []
  dispatch({type:'HANDLE_ADD_MY_POKEMON', myPokemon: { myPokeName: myPokeName, pokeId: pokeId, pokeName: pokeName }})
    if (localStorage.getItem('pokemon') != null){
      pokeLocalStorage = JSON.parse(localStorage.getItem('pokemon'))
      pokeLocalStorage.push({ myPokeName: myPokeName, pokeId: pokeId, pokeName: pokeName })
      localStorage.setItem("pokemon", JSON.stringify(pokeLocalStorage))
    }
    else{
      localStorage.setItem("pokemon", JSON.stringify([{ myPokeName: myPokeName, pokeId: pokeId, pokeName: pokeName }]))
    }
    
    dispatch({type:'HANDLE_CLOSE_MODAL', value:false})
  }
  return (
      <div>
        <Modal show={statusModal} onHide={()=>dispatch({type:'HANDLE_ClOSE_MODAL', value:false})}>
          <Modal.Header>
            <Modal.Title>Pokemon Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label htmlFor="inputPassword5">Poke Name</Form.Label>
              <Form.Control
                type="text"
                value={myPokeName}
                onChange={(e) => setPokeName(e.target.value)}
                />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>dispatch({type:'HANDLE_CLOSE_MODAL', value:false})}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default PokeModal;