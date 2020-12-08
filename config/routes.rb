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
        get 'user_exists', :on => :collection
        resources :events, only: [:show, :create, :new, :update, :destroy, :user_exists] do
        end
      end
    end  
  end
end