source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.1'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 4.3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Rails Admin UI
gem 'rails_admin', '~> 1.3.0'
gem 'rails_admin_history_rollback'

gem 'webpacker'

gem 'foreman'

# Environment variables
gem 'figaro'

# Draper adds an object-oriented layer of presentation logic to your Rails application.
gem 'draper'

# Ruby library that pretty prints Ruby objects in full color
gem 'awesome_print', require: 'ap'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

gem "paranoia", "~> 2.2"

gem 'paper_trail'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  gem 'webdrivers', '~> 4.0'
  gem 'bullet' # help to kill N+1 queries and unused eager loading
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  gem 'rspec-rails' # Rails testing engine
  gem 'guard-rspec' # Auto-run specs
  gem 'shoulda-matchers', '3.1.3' # Tests common Rails functionalities
  gem 'selenium-webdriver' # Ruby bindings for Selenium/WebDriver
  gem 'database_cleaner' # Use Database Cleaner

  gem 'pronto'
  gem 'pronto-rubocop', require: false
  gem 'pronto-flay', require: false # analyzes code for structural similarities
  gem 'pronto-brakeman', require: false # analyzes code for security vulnerabilities
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'

  # Better error UI
  gem 'better_errors'
  gem 'binding_of_caller'

  gem 'rubocop-performance'

  #== Mailer server
  gem 'letter_opener_web', '~> 1.0'
  gem "letter_opener"

  # Easy to rename app
  # $ rails g rename:into New-Name
  gem 'rename'

  #== Favicon
  # gem 'rails_real_favicon'
end

group :test do
  gem 'simplecov', require: false # code coverage analysis tool for Ruby
  gem 'rspec-retry' # Retry randomly failing rspec example.
  gem 'rails-controller-testing' # add helpers for template testing
  gem 'factory_bot_rails'
end

group :production do
  #== For Heroku
  # gem 'rails_12factor'

  #== Error tracking (https://sentry.io)
  # gem "sentry-raven"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
