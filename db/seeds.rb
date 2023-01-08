# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'csv'
first_row = false
# skipping first row since it is an empty row also skipping the header row
CSV.foreach(Rails.root.join('lib/seed_data.csv'), headers: true) do |row|
    if  first_row
        billable = row["Billable?"] == "Yes" ? true : false
    Timesheet.create!(
        first_name: row["First Name"],
        last_name: row["Last Name"],
        client: row["Client"],
        project: row["Project"],
        project_code: row["Project Code"],
        hours: row["Hours"].to_f,
        billable: billable,
        billing_rate: row["Billable Rate"].to_i,
        date: row["Date"]
    )
    else
        first_row = true

    end
    
end

p "Added #{Timesheet.count} timesheets to the database"