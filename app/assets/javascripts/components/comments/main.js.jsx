var CommentBox = React.createClass({
  render: function(){
    return(
      <div className="commentBox">
       Im a Box
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