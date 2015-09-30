var CommentBox = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function (comments) {
        this.setState({data: comments});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment){
    var comments = this.state.data;
    var updatedComments = comments.concat([comment]); 
    this.setState({data: updatedComments});  
    $.ajax({
      url: this.props.url,
      type: 'POST',
      dataType: 'json',
      data: comment,
      success: function (comments) {
        this.setState({data: comments['comments']});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
  },
  render: function(){
    return(
      <div className="commentBox">
        <h1> Comments! </h1>
        <CommentList data={this.state.data} />
        <CommentForm onDataSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
