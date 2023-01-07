Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
    get "/api/timesheets", to: "timesheets#index"
    post "/api/timesheets", to: "timesheets#create"
end
