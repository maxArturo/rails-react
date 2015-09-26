class CommentsController < ApplicationController
  def index
  end

  def all
    @comments = Comment.all.shuffle.first(10)
  end
end
