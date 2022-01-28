class Tweet < ApplicationRecord
    validates :body, presence: true
    validates :likes, :retweets, presence: true, numericality: { :greater_than_or_equal_to => 0 }

    has_many :comments, dependent: :delete_all
end
