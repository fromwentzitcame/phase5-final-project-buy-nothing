class SubcommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :likes
  has_one :user
  has_one :comment
end
