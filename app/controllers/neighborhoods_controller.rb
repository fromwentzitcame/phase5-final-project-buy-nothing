class NeighborhoodsController < ApplicationController
  before_action :set_neighborhood, only: [:show, :update, :destroy]

  # GET /neighborhoods
  def index
    render json: Neighborhood.all
  end

end
