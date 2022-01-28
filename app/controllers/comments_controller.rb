class CommentsController < ApplicationController
    before_action :set_tweet

    def create
        @comment = @tweet.comments.create!(comment_params)

        respond_to do |format|
            if @comment.save!
            # Instead of redirecting like we normally would, we render a partial for our Stimulus controller to handle
            # Note that we're just rendering HTML here, no need to render jbuilders or js partials
            #render partial: 'show', locals: { comment: comment }, status: :ok
        
                format.turbo_stream
                format.html { redirect_to @tweet }

            else
                #        render partial: 'form', locals: { comment: comment }, status: :unprocessable_entity
                
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
