class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.string :origin
      t.string :destination
      t.string :date
      t.float :duration
      t.integer :distance
      t.text :notes
      t.references :pilot, null: false, foreign_key: true
      t.references :flight, null: false, foreign_key: true
      t.float :air_traffic_control
      t.float :grounds_crew
      t.float :flight_attendants
      t.float :co_pilot

      t.timestamps
    end
  end
end
