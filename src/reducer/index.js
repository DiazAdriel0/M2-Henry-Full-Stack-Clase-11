const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  switch (action.type) {
    case INCREMENTO:
      return {
        //...state, no va porque el estado solo tiene la propiedad contador
        contador: state.contador + 1
      }
    case DECREMENTO:
      return {
        //...state,
        contador: state.contador - 1
      }
    case INCREMENTO_IMPAR: 
      if(state.contador % 2 === 1){
        return {
          //...state,
          contador: state.contador + action.payload,
        }
      }
      return {...state}
      //mas simple es solo usar incremento cuando hago el dispatch y hacer la comparacion de si es impar en ese momento 
    default:
      return {...state}
  }
}

module.exports = contador;