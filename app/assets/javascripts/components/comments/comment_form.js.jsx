CommentBox.CommentForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();

    if (!text || !author)
      return;

    //Send request to server here
    this.props.onDataSubmit({author: author, text: text});

    // clear text from boxes
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },

  // callback should be a this.props.onDataSubmit
  //

  render: function(){
    return(
      <div>
        <span>This is the comment form, by the way. Markup is enabled.</span>
        <div className="comment-form">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  placeholder="Your Name" ref="author" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Comments</label>
              <div className="col-sm-10">
                <textarea className="form-control"
                  placeholder="Your comments" rows="3" ref="text" />
              </div>
            </div>
              <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});
