class Post < ApplicationRecord
  
  belongs_to :user
  belongs_to :category
  has_many :comments, dependent: :destroy
  has_many :subcomments, through: :comments

  has_many_attached :pictures, dependent: :destroy

  def picture_urls
      pictures.map{ |pic| Rails.application.routes.url_helpers.url_for(pic) }
  end

  def category_type
      self.category.category_name
  end

  def user_name
      self.user.full_name
  end

  def user_picture
      self.user.profile_picture_url
  end

  def comments
      self.comments
  end

end
