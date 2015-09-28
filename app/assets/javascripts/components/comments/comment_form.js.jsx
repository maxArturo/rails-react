var CommentForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();

    if (!text || !author) 
      return;

    //Send request to server here

    
    },
  render: function(){
    return(
      <div>
        <span>This is the comment form, by the way. Markup is enabled.</span>
        <div className="comment-form">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" 
                  placeholder="Your Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Comments</label>
              <div className="col-sm-10">
                <textarea className="form-control" 
                  placeholder="Your comments" rows="3" />
              </div>
            </div>
              <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});
