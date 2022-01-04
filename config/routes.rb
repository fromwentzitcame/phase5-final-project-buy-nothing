Rails.application.routes.draw do
  
  resources :neighborhoods, only: [:index]
  resources :categories, only: [:index]
  resources :users, only: [:index, :show, :update, :destroy]
  resources :posts, only: [:index, :show, :update, :destroy]
  resources :comments
  resources :subcomments

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show_my_profile"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/createpost", to: "posts#create"

  patch "/posts/:id/like", to: "posts#add_like"
  patch "/posts/:id/unlike", to: "posts#remove_like"

  patch "/comments/:id/like", to: "comments#add_like"
  patch "/comments/:id/unlike", to: "comments#remove_like"

  patch "/subcomments/:id/like", to: "subcomments#add_like"
  patch "/subcomments/:id/unlike", to: "subcomments#remove_like"

end
