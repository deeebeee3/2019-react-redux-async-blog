import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {

  //action creator will now retun an async function instead of a plain javascript object
  //our middleware (thunk) will be able to deal with this - dispatch will be executed once
  //data recieved from api

  return async function(dispatch, getState) {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response })
  }

};
