class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.datetime :date, null: false
      t.string :decscription
      #  TO_DO: fix description column, add creator_id column
      t.timestamps
    end
  end
end
