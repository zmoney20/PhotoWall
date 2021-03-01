import React from 'react';
import Photo from './photo';
import Comments from './Comments'
class Single extends React.Component {
  render() {
    const {posts, match} = this.props; 
    const i = this.props.posts.findIndex((post) => post.id === match.params.id);
    const post = this.props.posts[i];
    const comments = this.props.comments[post.id] || [];
        return (
          <div className="single-photo">
          <Photo key={i} post={post} i={i} {...this.props} />  
          <Comments {...this.props} postComments={comments} />   
          </div>
        )
      }
};

export default Single;

