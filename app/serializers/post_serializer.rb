class PostSerializer
  include JSONAPI::Serializer
  attributes :id, :category_type, :user_name, :user_picture, :user_neighborhood, :text, :likes, :datetime_created, :picture_urls

end
