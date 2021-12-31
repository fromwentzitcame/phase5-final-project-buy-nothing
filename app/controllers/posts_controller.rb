class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]
    # skip_before_action :authorize

    # GET /posts
    def index
      render json: Post.all.map{|post| PostSerializer.new(post).serializable_hash[:data][:attributes]}
    end
  
    # GET /posts/1
    def show
      render json: PostSerializer.new(@post).serializable_hash[:data][:attributes]
    end
  
    # POST /posts
    def create
      @post = Post.new(post_params)
      @post.to_json(include: [:pictures])
      if @post.save
        render json: PostSerializer.new(@post).serializable_hash[:data][:attributes], status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /posts/1
    def update
      @post.update!(post_params)
      render json: @post
    end
  
    # DELETE /posts/1
    def destroy
      @post.destroy
      head :no_content
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_post
        @post = Post.find_by!(id: params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def post_params
        params.permit(:text, :pictures, :category_id, :user_id)
      end
    
end
