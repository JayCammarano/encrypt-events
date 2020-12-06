class Event < ApplicationRecord
  has_and_belongs_to_many :users

  validates :title, presence: true
  validates :date, presence: true
  # validate date is in the future
end
