require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe "GET#new" do
    # context "when a request with the correct params is made" do
    #   it "returns a status of 200" do
    #     get :new
  
    #     expect(response.status).to eq 200
    #     expect(response.content_type).to eq "text/html"
    #   end
    # end
    context "when a request with incorrect params is made" do
      it "returns an error" do
        previous_count = User.count
        post :create, params: {"user"=>{bad_user: "bad_user"}}
        new_count = User.count

        returned_json = JSON.parse(response.body)

        expect(response.status).to eq 400
        expect(new_count).to eq(previous_count)
        expect(returned_json["error"]).to eq(["Password can't be blank", "Username can't be blank", "Password digest can't be blank", "Public key can't be blank", "Private key can't be blank"])
      end
    end
  end
end
