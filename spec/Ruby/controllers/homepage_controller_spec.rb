require 'rails_helper'

RSpec.describe HomepageController, type: :controller do
  describe "GET#Index" do
    it "returns a status of 200" do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq "text/html"
    end
  end
end
