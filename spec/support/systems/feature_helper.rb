module FeatureHelper
  # rubocop:disable Lint/Debugger
  def ss
    file_name = ('a'..'z').to_a.sample(8).join
    file_path = Rails.root.join('tmp', 'capybara', "#{file_name}.jpg")
    puts "saved screenshot to #{file_path}"
    save_screenshot(file_path)
  end
  # rubocop:enable Lint/Debugger
end
