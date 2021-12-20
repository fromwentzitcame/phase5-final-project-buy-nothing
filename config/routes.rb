Rails.application.routes.draw do
  
  resources :posts
  resources :users, only: [:index, :show, :update, :destroy]
  resources :neighborhoods, only: [:index, :show]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show_my_profile"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
