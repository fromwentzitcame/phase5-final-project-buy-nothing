class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: UserSerializer.new(current_user).serializable_hash[:data][:attributes], status: :ok
        else
            render json: {errors: ["invalid email or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
