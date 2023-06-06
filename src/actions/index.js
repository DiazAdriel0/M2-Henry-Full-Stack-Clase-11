const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR, INCREMENTO_ASYNC } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = () => {
  return {type: INCREMENTO}
};

const decremento = () => {
  return {type: DECREMENTO}
};

const impIncAction = () => {
  return {
    type: INCREMENTO_IMPAR,
    payload: 1
  }
}

/* const incAsyncAction = () => {
  return {
    type: INCREMENTO_ASYNC,
    payload: 1
  }
} //Esto lo hice de otra manera a como hice impar para que quede de muestra
*/

module.exports = {
  incremento,
  decremento,
  impIncAction,
  incAsyncAction
}
