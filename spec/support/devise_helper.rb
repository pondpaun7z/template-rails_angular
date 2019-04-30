# module DeviseHelpers
#   module ControllerHelpers
#     def sign_in_user(user)
#       request.env['devise.mapping'] = Devise.mappings[:user]
#       sign_in(user)
#     end
#   end

#   module SystemHelpers
#     def login(user)
#       login_as(user, scope: :user)
#     end
#   end
# end

# RSpec.configure do |config|
#   config.include DeviseHelpers::ControllerHelpers, type: :controller
#   config.include DeviseHelpers::SystemHelpers, type: :system
# end
