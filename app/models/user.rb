class User < ApplicationRecord
    has_one_attached :profile_picture

    def profile_picture_url
        Rails.application.routes.url_helpers.url_for(profile_picture) if profile_picture.attached?
    end
end
