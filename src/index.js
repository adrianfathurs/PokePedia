import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'



const initialState = {
  tooltip: false,
  modal: false,
  pokeId: null,
  pokeName: "",
  poke_type_colors: {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
    unknown: '#68A090',
    shadow: '#661BBF'
  },
  myPokemon: localStorage.getItem('pokemon') ? JSON.parse(localStorage.getItem('pokemon')) : [],
}
const rootReducer = (state = initialState , action) => {
  if(action.type === "HANDLE_MODAL_TOOLTIP") {
      let number = Math.floor(Math.random() * 10);
      if(number > 5){
        return {
          ...state,
          tooltip: !action.value,
          modal: action.value,
          pokeId: action.pokeId,
          pokeName: action.pokeName,
        }
      }
      return {
        ...state,
        tooltip: true,
        modal: false
      }
    }
  else if (action.type === "HANDLE_CLOSE_MODAL"){
    return {
      ...state, 
      modal: action.value
    }
  }
  else if (action.type === "HANDLE_ADD_MY_POKEMON") {
    return {
      ...state,
      myPokemon: [...state.myPokemon, action.myPokemon]
    }
  }
  else if (action.type === "HANDLE_REMOVE_MY_POKEMON") {
    const cloneMyPokemon = [...state.myPokemon]
    cloneMyPokemon.splice(action.index, 1)
    return {
      ...state,
      myPokemon: cloneMyPokemon
    }
  }
  return state
}




const store = createStore(rootReducer)
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
