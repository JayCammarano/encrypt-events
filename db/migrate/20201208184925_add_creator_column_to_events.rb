class AddCreatorColumnToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :creator, :boolean, null: false, :default => false

  end
end
