require 'rails_helper'

RSpec.describe Api::V1::EventsController, type: :controller do
  let!(:event1) {FactoryBot.create(:event)}

  describe "POST#Create" do
    let!(:user1) {FactoryBot.create(:user)}
    
    # context "when a post is made with correct params" do
    #   it "adds a new Event to the database" do
    #     previous_count = Event.count
    #     post :create, params: {user_id: user1.id, event: {title: "title", decscription: "a long description", location: "boston, ma", date: "2020-12-07T03:44:00.469Z"} }
    #     new_count = Event.count

    #     expect(response.status).to eq 200
    #     expect(response.content_type).to eq("application/json")
    #     expect(new_count).to eq(previous_count + 1)
    #   end

    #   it "returns the event information" do
    #     post :create, params: {user_id: user1.id, event: {title: "title", decscription: "a long description", location: "boston, ma", date: "2020-12-07T03:44:00.469Z"} }
    #     returned_json = JSON.parse(response.body)
        
    #     expect(returned_json["event"]["title"]).to eq("title")
    #     expect(returned_json["event"]["decscription"]).to eq("a long description")
    #     expect(returned_json["event"]["location"]).to eq("boston, ma")
    #   end
    # end
  end
end
