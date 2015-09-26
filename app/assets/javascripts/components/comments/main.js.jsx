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
  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function(){
    return(
      <div className="commentBox">
        <h1> Comments! </h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

var ready = function(){
  React.render(
    <CommentBox url='comments/all.json' pollInterval={2000}/>,
    document.getElementById('content')
  );
};

$(document).ready(ready);
