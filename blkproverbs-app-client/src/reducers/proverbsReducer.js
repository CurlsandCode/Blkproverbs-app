const initialState = {
	proverb: null,
	proverbs: [],
	meaning: null,
	source: null
};

export default function proverbsReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_PROVERB":
			return { ...state,
				proverb: action.payload.content,
				meaning: action.payload.meaning,
				source: action.payload.source
			}
		case "GET_PROVERBS_SUCCESS":
			return {
				...state,
				proverbs: action.payload
			}
		case "ADD_PROVERB":
			return Object.assign({}, state, {
				proverbs: state.proverbs.concat(action.payload)
			})

		case "LIKE_PROVERB":
			return { 
  ...state,
  proverbs: state.proverbs.map(proverb => proverb.id === action.payload.id ?
    // transform the one with a matching id
    { ...proverb, like: action.payload.like} :
    // otherwise return the original proverb
    proverb
  )
}

	default:
	return state;
}
}
