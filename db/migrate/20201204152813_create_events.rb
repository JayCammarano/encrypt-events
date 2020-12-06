class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.datetime :date, null: false
      t.string :decscription

      t.timestamps
    end
  end
end
