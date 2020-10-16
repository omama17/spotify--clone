export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //set the token value to null like token:null
  //token:
  //"BQB3KB5dzzW-z2UzfKIC5T6u9N4Acg4pGUMvL2chbUfcqUr-yysiHrVbGInQ-eWagaIB8yC2guayYuAERj6gNoG5xH4zam-xmPMBm1GxUH5AQzzQZnbzjjkiBVlxUBusLgTto7pCwXpibYpzSqH6_ToYNVZvguF4ILwDB4B2z3JzVT7ung",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};
export default reducer;
