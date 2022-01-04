class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :likes, :datetime_created, :post_id

  belongs_to :user, serializer: UserCommentDetailsSerializer
  # has_one :post
  has_many :subcomments
  
end
