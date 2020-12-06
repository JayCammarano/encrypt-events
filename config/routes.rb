Rails.application.routes.draw do

  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :new, :show, :update, :destroy] do
        resources :events, only: [:show, :create, :new, :update, :destroy]
      end
    end
  end  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end