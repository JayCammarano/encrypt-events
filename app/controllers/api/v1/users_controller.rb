class Api::V1::UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      error = {
        error: user.errors.full_messages,
        status: 400
      }
      render :json => error, status: :bad_request
    end
  end
  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :public_key, :private_key)
  end
end
