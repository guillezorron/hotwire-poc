class CreateTweets < ActiveRecord::Migration[6.1]
  def change
    create_table :tweets do |t|
      t.text :body
      t.integer :likes, default: 0
      t.integer :retweets, default: 0

      t.timestamps
    end
  end
end
