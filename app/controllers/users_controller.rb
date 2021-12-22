class UsersController < ApplicationController
  before_action :set_user, only: [:update, :destroy]
  # skip_before_action :authorize, only: [:create]

  # GET /users
  def index
    render json: User.all.map{|user| UserSerializer.new(user).serializable_hash[:data][:attributes]}
  end

  def show
    user = User.find_by!(id: params[:id])
    render json: user, status: :ok
  end

  # GET /users/1
  def show_my_profile
    if current_user
      render json: UserSerializer.new(current_user).serializable_hash[:data][:attributes], status: :ok
    else
      render json: "Not authenticated", status: :unauthorized
    end
  end

  # POST /users
  def create
    @user = User.create!(user_params)
    @user.to_json(include: [:profile_picture])
    if user.valid?
      session[:user_id] = @user.id
      render json: UserSerializer.new(@user).serializable_hash[:data][:attributes], status: :created
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find_by!(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:first_name, :last_name, :email, :password, :neighborhood, :profile_picture)
    end
end
