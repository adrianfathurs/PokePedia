import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'


const initialState = {
  tooltip: true,
  modal: false,
}
const rootReducer = (state = initialState , action) => {
  if(action.type === "HANDLE_MODAL_TOOLTIP") {
      let number = Math.floor(Math.random() * 10);
      console.log(number)
      if(number > 5){
        return {
          ...state,
          tooltip: !action.value,
          modal: action.value
        }
      }
      return {
        ...state,
        tooltip: true,
        modal: false
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
