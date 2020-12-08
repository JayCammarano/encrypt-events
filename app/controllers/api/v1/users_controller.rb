class Api::V1::UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id 
      render json: {
        status: :created,
        user: {user_id: user.id,
          username: user.username,
          private_key: user.private_key
        }
      }
    else
      error_object = {
      error: user.errors.full_messages,
      status: 400
    }
    render :json => error_object
    end
  end

  def login
    if @current_user
      render json: {
        logged_in: true,
        user: {user_id: @current_user.id,
          username: @current_user.username,
          private_key: @current_user.private_key
        }
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def logged_in  
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def logout
    reset_session
    render json: { status: 200, logged_in: false }
  end

  def show
    begin
      @user = User.find(params[:id]) 
      render json: @user, serializer: UserEventsSerializer
     rescue ActiveRecord::RecordNotFound  
      error = {
        error: "User not found",
        status: 400
      }
      render :json => error, :status => :bad_request
      return
     end
  end

  def user_exists
    user = User.where(username: params[:username]).first
    if user
    render json: {
      status: "exists",
      user: user.username
      }
  else
    error = {
      error: "User #{params[:username]} not found",
      status: 400
    }
    render :json => error
   end
end


  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :public_key, :private_key)
  end
end
