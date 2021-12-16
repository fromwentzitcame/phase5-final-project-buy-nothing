class NeighborhoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :zip_code
end
