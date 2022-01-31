class CommentsController < ApplicationController
    before_action :set_tweet

    def create
        @comment = @tweet.comments.create!(comment_params)

        respond_to do |format|
            if @comment.save!        
                format.turbo_stream
                format.html { redirect_to @tweet }
            else
                format.html { render :new, status: :unprocessable_entity }
            end
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body)
    end

    def set_tweet
        @tweet = Tweet.find(params[:tweet_id])
    end
end
