class PostSerializer
  include JSONAPI::Serializer
  attributes :id, :text, :likes, :picture_urls
  belongs_to :user
end
