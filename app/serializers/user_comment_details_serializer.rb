class UserCommentDetailsSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :profile_picture_url, :neighborhood_name
end
