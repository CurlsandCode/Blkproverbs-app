const initialState = {
  proverb: null,
	proverbs: [],
  meaning: null,
  source: null
};

export default function proverbsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PROVERB":
			return {...state, proverb: action.payload.content, meaning: action.payload.meaning, source: action.payload.source }
		case "GET_PROVERBS_SUCCESS":
	   return {
			 ...state, proverbs: action.payload
		 }
		case "ADD_PROVERB":
     return Object.assign({}, state, {proverbs: state.proverbs.concat(action.payload)})
		
		
			
		default:
      return state;
  }
}