require "factory_bot"

FactoryBot.define do
  factory :user do
    username {"testuser"}
    password { 'password' }
    password_confirmation { 'password' }
  end
end