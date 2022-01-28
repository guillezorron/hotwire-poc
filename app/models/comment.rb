class Comment < ApplicationRecord
  belongs_to :tweet

  validates :body, presence: true

  after_create_commit -> { broadcast_append_to tweet}
end
