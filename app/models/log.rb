class Log < ApplicationRecord
  belongs_to :pilot
  belongs_to :flight

  validates :origin, presence: true
  validates :destination, presence: true
  validates :distance, numericality: { less_than_or_equal_to: 3500, message: "Invalid Distance" }
  validates :duration, presence: true
  validates :date, presence: true
  validates :notes, presence: true
  validates :flight_attendants, presence: true
  validates :air_traffic_control, presence: true
  validates :grounds_crew, presence: true
  validates :co_pilot, presence: true
  validates :id, presence: true
end
