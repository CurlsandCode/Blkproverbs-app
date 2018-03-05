class ProverbsController < ApplicationController

 def random
    proverb = Proverb.order('RANDOM()').limit(1).first
    render json: proverb
 end
	
	def index
		render json: Proverb.all
	end


	def create
    proverb = Proverb.new(proverb_params)
    if proverb.save
      render json: proverb
    else
      render json: { message: proverb.errors}, status: 400
    end
  end
	
	def update
		proverb = Proverb.find_by(id: params[:id])
		if proverb.update(proverb_params)
			render json: proverb
		else
			render json: {message: proverb.errors}, status: 400
	  end
  end
	
	private
	
	def proverb_params
		params.require(:proverb).permit(:content, :meaning, :source, :like)
	end
end
