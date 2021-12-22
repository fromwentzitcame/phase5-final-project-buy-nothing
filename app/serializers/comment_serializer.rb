class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :likes, :post_id, :user_id

  # belongs_to :post
  # belongs_to :user

  has_many :subcomments
  
end
