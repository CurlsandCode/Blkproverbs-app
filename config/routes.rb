Rails.application.routes.draw do
  root to: 'pages#home'
  
  scope '/api' do
   get 'proverbs/random', to: 'proverbs#random'
   resources :proverbs, only: [:show,:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 end
end
