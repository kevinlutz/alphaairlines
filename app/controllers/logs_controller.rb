class LogsController < ApplicationController
    def index
        logs = Log.all
        render json: logs, status: :ok
    end

    def create
        new_flight_log = Log.create(flight_log_params)
        if new_flight_log.valid?
            render json: new_flight_log, status: :created
        else
            render json: {errors: new_flight_log.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def flight_log_params
        params.permit(:origin, :destination, :duration, :date, :distance, :notes, :air_traffic_control, :grounds_crew, :flight_crew, :co_pilot, :pilot_id, :flight_id)
    end
end
