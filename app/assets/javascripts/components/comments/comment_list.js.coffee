CommentBox.CommentList = React.createClass(
  commentNodes: ->
    @props.data.map( (d) ->
      <CommentBox.Comment author={d.author}>
        {d.text}
      </CommentBox.Comment>
    )

  noNodes: ->
    <p className="foo"> No comments yet... </p>;

  render: ->
    output
    if @props.data? and @props.data.length == 0
      output = @noNodes()
    else
      output = @commentNodes()

      <div className="commentList">
        This is the comment list.
        {output}
      </div>
)
