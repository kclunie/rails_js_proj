class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :location, :details
  has_many :attends
end
