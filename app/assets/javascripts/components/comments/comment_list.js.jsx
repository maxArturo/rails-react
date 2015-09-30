CommentBox.CommentList = React.createClass({
  commentNodes: function(){
    var nodes = this.props.data.map(function(d){
      return(
        <CommentBox.Comment author={d.author}>
          {d.text}
        </CommentBox.Comment>
      );
    });
    return nodes;
  },
  noNodes: function(){
    return <p className="foo"> No comments yet... </p>;
  },
  render: function(){
    var output;
    if (this.props.data && this.props.data.length === 0){
      output = this.noNodes()
    } else {
      output = this.commentNodes()
    };
    return(
      <div className="commentList">
        This is the comment list.
        {output}
      </div>
    );
  }
});
