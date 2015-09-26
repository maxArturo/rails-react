var CommentList = React.createClass({
  render: function(){
    return(
      <div className="commentList">
        This is the comment list.
        <Comment author="Someone">
        how about this huh
        </Comment>

        <Comment author="Someone Else">
        curious eh
        </Comment>
      </div>
    );
  }
});