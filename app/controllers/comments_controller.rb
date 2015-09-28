class CommentsController < ApplicationController
  def index
  end

  def all
    @comments = Comment.all.shuffle.first(5)
  end
end
