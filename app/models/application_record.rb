class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def increase_likes
    i = self.likes
    i += 1
    self.update(likes: i)
  end

  def unlike
    i = self.likes
    i -= 1
    self.update(likes: i)
  end
  
end
