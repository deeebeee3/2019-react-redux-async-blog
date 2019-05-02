import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //get just the userId property from all the posts (an array of 100 userIds) and find just the unique userIds
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  
  console.log(userIds);

  userIds.forEach(id => dispatch(fetchUser(id)));

}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};


//ISSUE WITH THIS - can call this action creator only one time with each unique user id
//So won't be able to refetch a user with this action creator if ever needed to in the future...
//IN REAL LIFE - highly likely will need to refetch different resources over time...

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize( async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });

// });

export const fetchUser = (id) => async (dispatch) => {

  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });

};