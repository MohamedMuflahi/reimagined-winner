class CreateTimesheets < ActiveRecord::Migration[7.0]
  def change
    create_table :timesheets do |t|
      t.string :first_name
      t.string :last_name
      t.string :client
      t.string :project
      t.string :project_code
      t.float :hours
      t.boolean :billable
      t.integer :billing_rate
      t.string :date

      t.timestamps
    end
  end
end
