class Event < ApplicationRecord
  has_and_belongs_to_many :users

  validates :title, presence: true
  validates :date, presence: true
  # validate date is in the future
  # if date is stored in utc how will users know the time in their timezone?
  # google has a timezone field
  # I added a location field but people dont always/usually use that in a formatted way

end
