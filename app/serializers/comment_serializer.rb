class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :likes, :post_id, :user_id

  has_many :subcomments
  
end
