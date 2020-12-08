class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.text :encrypted_event, null: false
      t.timestamps
    end
  end
end
