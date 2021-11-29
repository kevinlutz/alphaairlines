class Flight < ApplicationRecord
    has_many :logs
    has_many :pilots, through: :logs
    
    validates :flight, presence: true, length: { maximum: 4 }
end
