class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :public_key, :private_key, 
  has_many :events
  class EventsSerializer < ActiveModel::Serializer
    attributes :title, :date, :description, :location
  end
end
