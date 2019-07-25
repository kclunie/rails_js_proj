Rails.application.routes.draw do

  root 'sessions#index'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/signup' => 'users#create'

  resources :events do 
    resources :attends, only: [:index, :new, :create]
  end
  
  resources :attends
  resources :users 
  resources :events


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
