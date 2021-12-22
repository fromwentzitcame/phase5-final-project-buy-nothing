class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :first_name, :last_name, :email, :neighborhood_name, :profile_picture_url

  # belongs_to :neighborhood
  # def neighborhood_name
  #   self.object.neighborhood.name
  # end
  
end
