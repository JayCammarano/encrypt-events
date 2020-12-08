class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :public_key, null: false
      t.string :private_key, null: false

      t.timestamps
    end
  end
end
