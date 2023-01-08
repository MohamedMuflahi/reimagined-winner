class TimesheetsController < ApplicationController
    def index
        timesheets = Timesheet.all
        render json: {
            timesheets: timesheets.page(params[:page]).per(params[:per_page]),
            total_billable_amount: Timesheet.total_billable_amount,
            total_hours: Timesheet.total_hours,
            total_count: timesheets.total_count
            }, status: :ok
    end

    def create
        timesheet = Timesheet.create!(user_params)
        render json: timesheet, status: :created
    end

    private 
    
    def timesheet_params
        params.require(:timesheet).permit(:first_name, :last_name, :client, :project, :project_code, :hours, :billable, :billing_rate, :date)
    end
end
