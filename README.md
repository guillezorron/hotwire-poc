# README

## Configuration steps:

After cloning the repo:

* ` bundle install `

* ` rails webpacker:install `

* ` rails turbo:install `

* ` rails turbo:install:redis `

in application.html.erb, remove: 
````
<%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %> 
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %> 
````

and then add

````
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<%= stylesheet_link_tag 'application', media: 'all' %>
<%= yield :head %>
<%= turbo_include_tags %>
````
    
## DB setup

* rails db:create
* rails db:migrate

## stimulus configuration

* gem 'stimulus-rails'
* bundle install
* rails stimulus:install
* bundle exec rails webpacker:install:stimulus


## To add new stimulus functions
This project configuration is different from the one that `rails stimulus:manifest:update` creates, so we recommend not to run it.

Stimulus works with the app/javascript/packs/application.js and  app/javascript/controllers/application.js. Each time you create a new Stimulus controller (at app/javascript/controllers) you must register it at app/javascript/controllers/application.js