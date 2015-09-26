namespace :db do
  desc 'populate with random commments'
  task populate: :environment do
    Comment.destroy_all

    10.times do
      Comment.create(
        author: FFaker::Name.first_name + " " + FFaker::Name.last_name,
        text: FFaker::HipsterIpsum.words(20).join(' ')
      )
    end
  end
end