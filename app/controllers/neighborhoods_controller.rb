class NeighborhoodsController < ApplicationController

  def index
    render json: Neighborhood.all
  end

end
