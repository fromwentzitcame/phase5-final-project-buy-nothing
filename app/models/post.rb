class Post < ApplicationRecord
  belongs_to :user

  has_many_attached :pictures

  def picture_urls
      pictures.map{ |pic| Rails.application.routes.url_helpers.url_for(pic) if pic.attached?}
  end

end
