class LogSerializer < ActiveModel::Serializer
  attributes :id, :origin, :destination, :date, :duration, :distance, :notes, :air_traffic_control, :grounds_crew, :flight_attendants, :co_pilot
  has_one :pilot
  has_one :flight
end
