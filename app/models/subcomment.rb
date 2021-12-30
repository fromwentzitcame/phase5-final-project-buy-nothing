class Subcomment < ApplicationRecord
  
  belongs_to :user
  belongs_to :comment

  def user_name
    self.user.full_name
  end

  def user_picture
    self.user.profile_picture_url
  end

end
