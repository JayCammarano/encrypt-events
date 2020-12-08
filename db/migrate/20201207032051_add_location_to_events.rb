class AddLocationToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :event, :location, :string
  end
end
