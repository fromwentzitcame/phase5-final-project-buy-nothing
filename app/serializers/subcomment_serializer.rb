class SubcommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :likes, :comment_id, :user_id, :user_name, :user_picture, :user_neighborhood, :datetime_created

  # belongs_to :user, serializer: UserSubcommentDetailsSerializer
  # has_one :comment
end
