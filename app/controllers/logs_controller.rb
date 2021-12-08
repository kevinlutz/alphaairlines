class LogsController < ApplicationController
    def index
        logs = Log.all
        render json: logs, status: :ok
    end

    def create
        @new_flight_log = Log.new(flight_log_params)

        if @new_flight_log.save
            render json: @new_flight_log, status: :created
        else
            render json: {errors: @new_flight_log.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        new_flight_log = Log.find_by(id: params[:id])
        if new_flight_log
            new_flight_log.destroy
            render json: {message: "Flight log successfully destroyed"}, status: :no_content            
        else
            render json: {error: "Flight log not found"}, status: :not_found 
        end
    end

    def update
        note = Log.find_by(id: params[:id])
        note.update(note_params)
        if note.valid?
            render json: note, status: :ok
        else
            render json: {errors: note.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def flight_log_params
        params.require(:log).permit(:origin, :destination, :duration, :date, :distance, :notes, :air_traffic_control, :grounds_crew, :flight_attendants, :co_pilot, :pilot_id, :flight_id)
    end

    def note_params
        params.permit(:notes)
    end
end
