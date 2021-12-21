class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :first_name, :last_name, :email, :zip_code, :profile_picture_url

  belongs_to :neighborhood
  
end
