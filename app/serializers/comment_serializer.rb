class CommentSerializer < ActiveModel::Serializer
  attributes :id, :category, :text, :likes, :fulfilled

  belongs_to :post
  belongs_to :user

  has_many :subcomments
  
end
