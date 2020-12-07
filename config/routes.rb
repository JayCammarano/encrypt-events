Rails.application.routes.draw do
  get "/login", to: 'homepage#index'
  get "/signup", to: 'homepage#index'
  get "/user_profile", to: "homepage#index"
  
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :new, :update, :destroy, :login, :logout, :logged_in] do
        post 'login', :on => :collection
        delete 'logout', :on => :collection
        get 'logged_in', :on => :collection
        resources :events, only: [:show, :create, :new, :update, :destroy]
      end
    end
  end  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end