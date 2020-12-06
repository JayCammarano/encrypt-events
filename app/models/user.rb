class User < ApplicationRecord
  has_and_belongs_to_many :events
# user uniqueness
  validates :username, presence: true
  validates_uniqueness_of :username, presence: true
  validates :password_digest, presence: true
  validates :public_key, presence: true
  validates :private_key, presence: true

end
