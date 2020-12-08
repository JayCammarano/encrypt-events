class Api::V1::EventsController < ApplicationController
  # check to make sure a user is logged in before accessing these routes, 
  # if not redirect to home, uses cancan ability.rb
  # load_and_authorize_resource

  def create
    @event = Event.new(event_params)
    event_with_users = Event.add_invitees(@event, params[:invitees])
    event_with_creator = @event.creator = User.find(params[:user_id])

    if @event.save
      render json: {
        status: :created,
        event: @event,
      }
    else
      error = {
      error: @event.errors.full_messages,
      status: 400
    }
    render :json => error
    end
  end

  def show
    begin
      @user = User.find(params[:user_id]) 
      @event = @user.events.find(params[:id])
      render json: @event, serializer: EventUsersSerializer
       rescue ActiveRecord::RecordNotFound  
      error = {
        error: "Event not found",
        status: 400
      }
      render :json => error, :status => :bad_request
      return
     end
  end

  private
  def event_params
    params.require(:event).permit(:encrypted_event, :invitees, :user_id )
  end
end
