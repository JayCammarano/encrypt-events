require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe 'POST#create' do
    context "when a post is made with correct params" do
      it "adds a new user to the database" do
        previous_count = User.count
        post :create, params: {"user"=>{"username"=> "test2", "password"=>"testtest", "password_confirmation"=>"testtest", "public_key": "testkey", "private_key": "testprivkey"}}
        new_count = User.count

        expect(response.status).to eq 200
        expect(response.content_type).to eq "application/json"
        expect(new_count).to eq(previous_count + 1)
      end

      it "returns the user object" do
        post :create, params: {"user"=>{"username"=> "test2", "password"=>"testtest", "password_confirmation"=>"testtest", "public_key": "testkey", "private_key": "testprivkey"}}
        returned_json = JSON.parse(response.body)      

        expect(response.status).to eq 200
        expect(response.content_type).to eq "application/json"
        expect(returned_json["user"]["username"]).to eq("test2")
      end
    end
    
    context "when a post is made with incorrect params" do
      it "returns an error" do
        previous_count = User.count
        post :create, params: {"user"=>{bad_user: "bad_user"}}
        new_count = User.count

        returned_json = JSON.parse(response.body)

        expect(response.status).to eq 400
        expect(new_count).to eq(previous_count)
        expect(returned_json["error"]).to eq(["Password can't be blank", "Username can't be blank", "Public key can't be blank", "Private key can't be blank"])
      end
    end
  end
end
