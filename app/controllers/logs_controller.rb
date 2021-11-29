class LogsController < ApplicationController
    def index
        logs = Log.all
        render json: logs, status: :ok
    end
end
