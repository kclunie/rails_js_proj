class EventsController < ApplicationController

    before_action :set_event, only: [:show]

    def index
       # if params[:user_id]
        #    @events = User.find(params[:user_id]).events
         # else
        @events = Event.order_by_date
        respond_to do |f|
            f.html {render :index}
            f.json {render json: @events}
        end
        #render json: @events
       # binding.pry
    end

    def new
        @event = Event.new
    end
    
    def create
        @event = Event.new(event_params)
        if @event.save
            render json: @event
           # respond_to do |f|
			#	f.html {redirect_to events_path}
			#	f.json {render json: @events}
			#end
         #redirect_to events_path
        else
         render :new
        end 
    end

    def popular_event
        @events = Event.popular_event
    end

    def show
        @attend = Attend.new
        @attend.build_user
        @user = User.find(session[:user_id])

        @event = Event.find_by(id: params[:id])
        respond_to do |f|
         f.html {render :show}
         f.json {render json: @event}
   end
        #@attends = Attend.all

    end

    def popular_events

    end

    private

    def event_params
        params.require(:event).permit(:name, :date, :location, :details)
    end

    def set_event
        @event = Event.find_by(id: params[:id])
        redirect_to events_path if !@event  
    end


end
