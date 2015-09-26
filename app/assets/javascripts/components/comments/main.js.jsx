var CommentBox = React.createClass({
  render: function(){
    return(
      <div className="commentBox">
        <h1> Comments! </h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var ready = function(){
  React.render(
    <CommentBox />,
    document.getElementById('content')
  );
};

$(document).ready(ready);