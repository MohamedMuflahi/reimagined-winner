class Timesheet < ApplicationRecord
    paginates_per 15
    
    def self.total_count
        Timesheet.count
    end
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
