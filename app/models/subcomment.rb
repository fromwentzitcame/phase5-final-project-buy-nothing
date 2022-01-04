class Subcomment < ApplicationRecord
  
  belongs_to :user
  belongs_to :comment

  def user_name
    self.user.full_name
  end

  def user_picture
    self.user.profile_picture_url
  end

  def user_neighborhood
    self.user.neighborhood_name
  end

  def datetime_created
    self.created_at.strftime('%A, %b %d, %Y at %I:%M %p')
  end

end
