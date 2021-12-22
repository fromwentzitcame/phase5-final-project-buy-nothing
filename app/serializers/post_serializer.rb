class PostSerializer
  include JSONAPI::Serializer
  attributes :id, :category_type, :text, :likes, :picture_urls

  belongs_to :user
  
end
