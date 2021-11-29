class Pilot < ApplicationRecord
    has_many :logs
    has_many :flights, through: :logs
    validates :name, presence: true
end
