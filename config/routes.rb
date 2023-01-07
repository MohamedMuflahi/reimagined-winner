Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/timesheets", to: "timesheets#index"
  post "/timesheets", to: "timesheets#create"
  
end
