CommentBox.CommentForm = React.createClass(
  handleSubmit: (e) ->
    e.preventDefault()
    author = React.findDOMNode(@refs.author).value.trim()
    text = React.findDOMNode(@refs.text).value.trim()

    # we need both text and author
    return unless text and author

    # Send request to server here
    @props.onDataSubmit(author: author, text: text)

    # clear text from boxes
    React.findDOMNode(@refs.author).value = ''
    React.findDOMNode(@refs.text).value = ''
    return

  render: ->
    <div>
      <span>This is the comment form, by the way. Markup is enabled.</span>
      <div className="comment-form">
        <form className="form-horizontal" onSubmit={@handleSubmit}>
          <div className="form-group">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"
                placeholder="Your Name" ref="author" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Comments</label>
            <div className="col-sm-10">
              <textarea className="form-control"
                placeholder="Your comments" rows="3" ref="text" />
            </div>
          </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
)
