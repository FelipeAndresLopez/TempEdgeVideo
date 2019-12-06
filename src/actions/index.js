export const setFavorite = payload => ({
  type: "SET_FAVORITE",
  payload
});

export const deleteFavorite = payload => ({
  type: "DELETE_FAVORITE",
  payload
});

export const getVideoSource = payload => ({
  type: "GET_VIDEO_SOURCE",
  payload
});

export const searchVideo = payload => ({
  type: "SEARCH_VIDEO",
  payload
});
