var CommentList = React.createClass({
  commentNodes: function(){
    var nodes = this.props.data.map(function(d){
      return(
        <Comment author={d.author}>
          {d.text}
        </Comment>
      );
    });
    return nodes;
  },

  render: function(){
    return(
      <div className="commentList">
        This is the comment list.
        {this.commentNodes()}
      </div>
    );
  }
});