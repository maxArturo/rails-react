class CommentsController < ApplicationController
  def index
    @comments = Comment.all.shuffle.first(5)
  end

  def all
    @comments = Comment.all.shuffle.first(5)
  end

  def create
    Comment.create author: params[:author], text: params[:text]
    render json: Comment.all.map{|c| {author: c.author, text: c.text}}
  end
end
