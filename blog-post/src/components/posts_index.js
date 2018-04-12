import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div>List of blog posts</div> 
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-warning">
            Add a Post
          </Link>
        </div>
      </div>
    );
  }
}

//function mapDispatchToProps(dispatch) {
//  return bindActionCreators({ fetchPosts }, dispatch);
//}

export default connect(null, { fetchPosts })(PostsIndex);