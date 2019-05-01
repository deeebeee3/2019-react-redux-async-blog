import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
  //bad approach!!!
  //Will result in error - "actions must be plain objects / use custom middleware for async actions..."

  /* 
  Reasons:

  1. Action creators must return plain JS objects with a type property - we are not! Rememnber this gets
  transpiled down to ES5 and the code thats generated does not return a plain JS object - check in babel.io

  2. By the time our action gets to a reducer, we won't have fetched our data!
  */

  const response = await jsonPlaceholder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
