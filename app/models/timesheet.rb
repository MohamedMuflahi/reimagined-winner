class Timesheet < ApplicationRecord
    def self.total_billable_amount
        Timesheet.where(billable: true).sum(&:billable_amount)
    end
    def billable_amount
        billing_rate * hours
    end
    def self.total_hours
        Timesheet.sum(&:hours)
    end
end
