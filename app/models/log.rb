class Log < ApplicationRecord
  belongs_to :pilot
  belongs_to :flight

  validates :origin, presence: true
  validates :destination, presence: true
  validates :distance, numericality: { less_than_or_equal_to: 3500, message: "Invalid Distance" }
  validates :duration, presence: true
  validates :date, presence: true
  validates :notes, presence: true
end
