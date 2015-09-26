var Comment = React.createClass({
  markup: function(){
    var raw = marked(this.props.children.toString(), {sanitize: true})
    return { __html: raw}
  },
  render: function(){
    return(
      <div className="comment">
        <h4 className="commentAuthor">
          {this.props.author}
        </h4>
        <div class="row">
          <span dangerouslySetInnerHTML={this.markup()} />
        </div>
      </div>
    );
  }
});