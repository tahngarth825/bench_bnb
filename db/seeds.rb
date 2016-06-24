# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

benches = Bench.create([{description: "Greyhound bus stop", lat:37.7892, lng:-122.3926},
  {description: "App Academy", lat:37.7914, lng:-122.3936},
  {description: "Beale Street Plaza", lat:37.7915, lng:-122.3970}])
