class PostSerializer
  include JSONAPI::Serializer
  attributes :id, :category_type, :user_id, :user_name, :user_picture, :text, :likes, :picture_urls
  
end
