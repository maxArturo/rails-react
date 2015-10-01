window.CommentBox = React.createClass(
  getInitialState: ->
    (data: [])

  loadCommentsFromServer: ->
    $.ajax(
      url: @props.url
      dataType: 'json'
      success: ((comments) ->
          @setState(data: comments)
        ).bind(@)
      error: ((xhr, status, err) ->
        console.error(this.props.url, status, err.toString())
        ).bind(@)
    )

  handleCommentSubmit: (comment) ->
    comments = @state.data
    updatedComments = comments.concat([comment]);
    @setState(data: updatedComments)
    $.ajax(
      url: @props.url,
      type: 'POST',
      dataType: 'json',
      data: comment,
      success: ((comments) ->
              @setState(data: comments)
            ).bind(@),
      error: ((xhr, status, err) ->
        console.error(@props.url, status, err.toString())
      ).bind(this)
    )

  componentDidMount: ->
    @loadCommentsFromServer()

  render: ->
      <div className="commentBox">
        <h1> Comments! </h1>
        <CommentBox.CommentList data={@state.data} />
        <CommentBox.CommentForm onDataSubmit={@handleCommentSubmit} />
      </div>

)
