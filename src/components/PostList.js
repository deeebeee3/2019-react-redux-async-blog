import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList(){
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    //console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
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
