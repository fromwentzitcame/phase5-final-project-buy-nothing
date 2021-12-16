class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]

    # GET /posts
    def index
      render json: Post.all.map{|post| PostSerializer.new(post).serializable_hash[:data][:attributes]}
    end
  
    # GET /posts/1
    def show
      render json: @post
    end
  
    # POST /posts
    def create
      @post = Post.new(post_params)
      byebug
      @post.to_json(include: [:pictures])
      if @post.save
        render json: PostSerializer.new(@post).serializable_hash[:data][:attributes], status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /posts/1
    def update
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /posts/1
    def destroy
      @post.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_post
        @post = post.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def post_params
        params.require(:post).permit(:text, pictures: [])
      end
    
end