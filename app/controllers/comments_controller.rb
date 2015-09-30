class CommentsController < ApplicationController
  def all
    @comments = Comment.all.sample(5)
  end

  def create
    Comment.create author: params[:author], text: params[:text]
    @comments = Comment.all.sample(5)
    render template: 'comments/all.json.jbuilder'
  end
end
