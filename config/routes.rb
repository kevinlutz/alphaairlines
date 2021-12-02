Rails.application.routes.draw do
  
  #resources :pilots
  #resources :logs, only: [:index]
  #resources :flights

  get '/logs', to: 'logs#index'
  post '/logs', to: 'logs#create'
  delete '/logs', to: 'logs#destroy'
  get '/pilots', to: 'pilots#index'
  get '/flights', to: 'flights#index'


  # post '/newlogform', to: 'logs#create'
  # delete '/deletelog', to: 'logs#destroy'



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
