require "factory_bot"

FactoryBot.define do
  factory :event do
    users {[build(:user)]} 
    title { 'Test Title' }
    decscription { 'A longer description' }
    date { '2020-12-07T03:44:00.469Z' }
  end
end