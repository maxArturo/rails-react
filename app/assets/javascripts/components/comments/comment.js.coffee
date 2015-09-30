CommentBox.Comment = React.createClass(
  markup: ->
    raw = marked(@props.children.toString(), (sanitize: true))
    return (__html: raw)

  render: ->
    <div className="comment">
      <h4 className="comment-author">
        {@props.author}
      </h4>
      <div className="row">
        <span dangerouslySetInnerHTML={this.markup()} />
      </div>
    </div>
)
