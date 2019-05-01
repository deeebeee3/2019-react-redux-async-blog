import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div>Post List</div>;
  }
}

//Now passing in mapStateToProps as first argument to connect
//There is now state / data to get into this component
//Pass in action creator (fetchPosts) as second argument

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(
  mapStateToProps,
  { fetchPosts: fetchPosts }
)(PostList);
