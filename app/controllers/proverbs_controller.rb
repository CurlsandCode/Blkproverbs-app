class ProverbsController < ApplicationController

 def random
    proverb = Proverb.order('RANDOM()').limit(1).first
    render json: proverb
 end
end
