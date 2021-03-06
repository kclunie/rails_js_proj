class User < ApplicationRecord
    has_many :attends
    has_many :events, through: :attends
    has_secure_password
    validates :name, presence: true
    validates :email, uniqueness: true
end
