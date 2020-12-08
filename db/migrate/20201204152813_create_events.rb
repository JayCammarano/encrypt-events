class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.text :encrypted_event, null: false
      t.string :decscription
      #  TO_DO: fix description colu
      t.timestamps
    end
  end
end
