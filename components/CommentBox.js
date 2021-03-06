import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux'

// export default () => {
//   return <div>Comment Box</div>
// }

class CommentBox extends Component {
  state = { comment: ''};
  handleChange = event => {
    this.setState({comment: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault();
    
    this.setState({comment: ''})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}/>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}
export default CommentBox