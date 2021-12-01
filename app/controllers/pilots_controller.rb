class PilotsController < ApplicationController
    def index
        pilots = Pilot.all
        render json: pilots, status: :ok
    end
end
