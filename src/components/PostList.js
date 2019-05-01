import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

//Passing in null to connect as first arg as we do not have a mapStateToProps function right now
//At present there is no state / data to get into this component
//Pass in action creator (fetchPosts) as second argument
export default connect(
  null,
  { fetchPosts: fetchPosts }
)(PostList);
