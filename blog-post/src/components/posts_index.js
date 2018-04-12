import React from 'react';

class PostsIndex extends React.Component {
  componentWillMount() {
    console.log('Good time to call action creator to fetch posts');
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;