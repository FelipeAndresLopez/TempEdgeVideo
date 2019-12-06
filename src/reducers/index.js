const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      const exist = state.myList.find(item => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };

    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      };

    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(action.payload)) ||
          []
      };
    case "SEARCH_VIDEO":
      if (action.payload === "") {
        return {
          ...state,
          search: []
        };
      }
      return {
        ...state,
        search:
          state.content.filter(items =>
            items.title.toLowerCase().includes(action.payload.toLowerCase())
          ) || []
      };

    default:
      return state;
  }
};

export default reducer;
