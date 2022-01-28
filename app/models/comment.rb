class Comment < ApplicationRecord
  belongs_to :tweet

  after_create_commit -> { broadcast_append_to tweet}
end
