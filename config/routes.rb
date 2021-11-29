Rails.application.routes.draw do
  
  #resources :pilots
  #resources :logs, only: [:index]
  #resources :flights
  get '/logs', to: 'logs#index'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
