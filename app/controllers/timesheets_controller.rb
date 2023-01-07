class TimesheetsController < ApplicationController
    def index
        timesheets = Timesheet.all
        render json: timesheets
    end

    def create
        timesheet = Timesheet.create!(user_params)
        render json: timesheet
    end

    private 
    
    def timesheet_params
        params.require(:timesheet).permit(:first_name, :last_name, :client, :project, :project_code, :hours, :billable, :billing_rate, :date)
    end
end
