import React, { Component } from 'react';
import serializeForm from 'form-serialize'

class Photo extends Component {
    handleSubmit= (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true })      
        const postId  = this.props.match.params.id
        const comment = values.comment;
        this.props.addComment(postId, comment);
        this.refs.commentForm.reset();
    }

  render() {
    return (
        <div className= "comment">
        {console.log(this.props.postComments)}
        {this.props.postComments.map((comment, i) => {
            return (
                <p key={i}>
                {comment}
                </p>
            )
        }
    )}
    <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
    <input type="text" name="comment" placeholder="comment"/>
    <input type="submit" hidden />
    </form>
    </div>
    );
  }
}

export default Photo;