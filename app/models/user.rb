class User < ApplicationRecord
    has_secure_password
    
    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :subcomments, dependent: :destroy
    belongs_to :neighborhood

    has_one_attached :profile_picture, dependent: :destroy
    # has_many_attached :pictures, through: :posts
    # ^^^ doesn't work

    def profile_picture_url
        Rails.application.routes.url_helpers.url_for(profile_picture) if profile_picture.attached?
    end

    def neighborhood_name
        self.neighborhood.name
    end
    def full_name
        "#{self.first_name} #{self.last_name}"
    end

end
