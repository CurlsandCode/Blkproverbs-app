import fetch from 'isomorphic-fetch'

export function getProverb(){
  return dispatch => {
   return fetch('api/proverbs/random')
    .then(response => response.json())
    .then(proverb => dispatch({type: "GET_PROVERB", payload: proverb}))
    .catch(error => console.log(error));
 }
}

export function getAllProverbs(){
	return dispatch => {
	return fetch('api/proverbs')
		.then(response => response.json())
		.then(proverbs => dispatch({type: "GET_PROVERBS_SUCCESS", payload: proverbs}))
		.catch(error => console.log(error));
	}
}

export function addProverb(proverb){
  return dispatch => {
    return fetch('api/proverbs', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ proverb: proverb })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
         dispatch({type: "ADD_PROVERB", payload: data}
        )
      })
   }
 }
			