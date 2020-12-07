# require "cancan/matchers"
# require 'rails_helper'

# RSpec.describe Ability, type: :model do
#   describe "User" do
#     describe "abilities" do
#       subject(:ability) { Ability.new(user) }
#       let(:user){ nil }
  
#       context "when is signed in" do
#         let(:user){ FactoryBot.create(:user)}
#         it { is_expected.to be_able_to(:create, Event.new(users: [user]))}
#       end
#     end
#   end
# end