class CreatePilots < ActiveRecord::Migration[6.1]
  def change
    create_table :pilots do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
