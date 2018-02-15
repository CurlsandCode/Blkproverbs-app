import fetch from 'isomorphic-fetch'

export function getProverb(){
  return dispatch => {
  return fetch('api/proverbs/random')
    .then(response => response.json())
    .then(proverb => dispatch({type: "GET_PROVERB", payload: proverb}))
    .catch(error => console.log(error));
}
}
