class Comment < ApplicationRecord

    belongs_to :post
    belongs_to :user
    has_many :subcomments, dependent: :destroy

    def user_neighborhood
        self.user.neighborhood_name
    end

    def datetime_created
        self.created_at.strftime('%A, %b %d, %Y at %I:%M %p')
    end
    
end
