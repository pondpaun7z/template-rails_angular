require 'simplecov'
SimpleCov.formatter = SimpleCov::Formatter::MultiFormatter.new([
                                                                 SimpleCov::Formatter::HTMLFormatter
                                                               ])

SimpleCov.start 'rails' do
  add_filter 'app/controllers/application_controller.rb'
  add_filter '/vendor/'
  add_filter '/config/'
  add_filter '/spec/'
  add_filter '/db/'
  add_filter '/app/channels'
end
