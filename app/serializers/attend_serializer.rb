class AttendSerializer < ActiveModel::Serializer
  attributes :id, :guest
  belongs_to :user
  belongs_to :event
end
