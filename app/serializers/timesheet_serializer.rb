class TimesheetSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :client, :project, :project_code, :hours, :billable, :billing_rate, :date
end
