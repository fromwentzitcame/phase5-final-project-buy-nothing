class User < ApplicationRecord
    has_secure_password
    
    has_many :posts
    has_many :comments
    has_many :subcomments
    belongs_to :neighborhood

    has_one_attached :profile_picture
    # has_many_attached :pictures, through: :posts
    # ^^^ doesn't work

    def profile_picture_url
        Rails.application.routes.url_helpers.url_for(profile_picture) if profile_picture.attached?
    end
end
