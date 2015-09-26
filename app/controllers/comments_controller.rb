class CommentsController < ApplicationController
  def index
  end

  def all
    @comments = Comment.all
  end
end
