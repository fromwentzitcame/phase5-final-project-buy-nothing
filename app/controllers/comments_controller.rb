class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy, :add_like, :remove_like]

  # GET /comments
  def index
    render json: Comment.all
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.create!(comment_params)
    if @comment.valid?
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
    head :no_content
  end

  def add_like
    @comment.increase_likes
    render json: @comment
  end

  def remove_like
    @comment.unlike
    render json: @comment
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find_by!(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.permit(:text, :user_id, :post_id)
    end
end
