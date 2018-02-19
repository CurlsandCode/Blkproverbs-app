const initialState = {
  proverb: null,
  meaning: null,
  source: null
};

export default function proverbsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PROVERB":
      return {
        proverb: action.payload.content,
        meaning: action.payload.meaning,
        source: action.payload.source
      };
    default:
      return state;
  }
}