class User < ApplicationRecord
  has_and_belongs_to_many :events
  
  has_secure_password
  validates :username, presence: true
  validates_uniqueness_of :username, presence: true
  validates :public_key, presence: true
  validates :private_key, presence: true

end
