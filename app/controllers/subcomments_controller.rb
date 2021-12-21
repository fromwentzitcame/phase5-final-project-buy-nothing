class SubcommentsController < ApplicationController
  before_action :set_subcomment, only: [:show, :update, :destroy]

  # GET /subcomments
  def index
    @subcomments = Subcomment.all

    render json: @subcomments
  end

  # GET /subcomments/1
  def show
    render json: @subcomment
  end

  # POST /subcomments
  def create
    @subcomment = Subcomment.new(subcomment_params)

    if @subcomment.save
      render json: @subcomment, status: :created, location: @subcomment
    else
      render json: @subcomment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /subcomments/1
  def update
    if @subcomment.update(subcomment_params)
      render json: @subcomment
    else
      render json: @subcomment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /subcomments/1
  def destroy
    @subcomment.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_subcomment
      @subcomment = Subcomment.find_by!(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def subcomment_params
      params.require(:subcomment).permit(:text, :likes, :user_id, :comment_id)
    end
end
