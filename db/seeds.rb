puts "Resetting database..."
Neighborhood.destroy_all
Neighborhood.reset_pk_sequence
Category.destroy_all
Category.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence
Post.destroy_all
Post.reset_pk_sequence
Comment.destroy_all
Comment.reset_pk_sequence
Subcomment.destroy_all
Subcomment.reset_pk_sequence

puts "Seeding Grand Rapids neighborhoods..."
alger_heights = Neighborhood.create(name: "Alger Heights", city: "Grand Rapids", state: "Michigan")
baxter = Neighborhood.create(name: "Baxter", city: "Grand Rapids", state: "Michigan")
belknap = Neighborhood.create(name: "Belknap Lookout", city: "Grand Rapids", state: "Michigan")
black_hills = Neighborhood.create(name: "Black Hills", city: "Grand Rapids", state: "Michigan")
creston = Neighborhood.create(name: "Creston", city: "Grand Rapids", state: "Michigan")
east_hills = Neighborhood.create(name: "East Hills", city: "Grand Rapids", state: "Michigan")
eastgate = Neighborhood.create(name: "Eastgate", city: "Grand Rapids", state: "Michigan")
eastown = Neighborhood.create(name: "Eastown", city: "Grand Rapids", state: "Michigan")
fuller_ave = Neighborhood.create(name: "Fuller Avenue", city: "Grand Rapids", state: "Michigan")
fulton_heights = Neighborhood.create(name: "Fulton Heights", city: "Grand Rapids", state: "Michigan")
garfield_park = Neighborhood.create(name: "Garfield Park", city: "Grand Rapids", state: "Michigan")
heartside = Neighborhood.create(name: "Heartside", city: "Grand Rapids", state: "Michigan")
heritage_hill = Neighborhood.create(name: "Heritage Hill", city: "Grand Rapids", state: "Michigan")
highland_park = Neighborhood.create(name: "Highland Park", city: "Grand Rapids", state: "Michigan")
john_ball = Neighborhood.create(name: "John Ball Park", city: "Grand Rapids", state: "Michigan")
madison = Neighborhood.create(name: "Madison Area", city: "Grand Rapids", state: "Michigan")
michigan_oaks = Neighborhood.create(name: "Michigan Oaks", city: "Grand Rapids", state: "Michigan")
midtown = Neighborhood.create(name: "Midtown", city: "Grand Rapids", state: "Michigan")
millbrook = Neighborhood.create(name: "Millbrook", city: "Grand Rapids", state: "Michigan")
north_east_ca = Neighborhood.create(name: "North East Citizens Action", city: "Grand Rapids", state: "Michigan")
oakdale = Neighborhood.create(name: "Oakdale", city: "Grand Rapids", state: "Michigan")
ottawa_hills = Neighborhood.create(name: "Ottawa Hills", city: "Grand Rapids", state: "Michigan")
ridgemoor = Neighborhood.create(name: "Ridgemoor", city: "Grand Rapids", state: "Michigan")
roosevelt_park = Neighborhood.create(name: "Roosevelt Park", city: "Grand Rapids", state: "Michigan")
south_east_comm = Neighborhood.create(name: "South East Community Association", city: "Grand Rapids", state: "Michigan")
south_east_end = Neighborhood.create(name: "South East End", city: "Grand Rapids", state: "Michigan")
south_hill = Neighborhood.create(name: "South Hill", city: "Grand Rapids", state: "Michigan")
south_west_end = Neighborhood.create(name: "South West End", city: "Grand Rapids", state: "Michigan")
west_grand = Neighborhood.create(name: "West Grand", city: "Grand Rapids", state: "Michigan")
westside_connection = Neighborhood.create(name: "Westside Connection", city: "Grand Rapids", state: "Michigan")

puts "Seeding post categories..."
gift = Category.create(type: "gift")
ask = Category.create(type: "ask")
gratitude = Category.create(type: "gratitude")

puts "Seeding users..."


puts "Seeding posts..."


puts "Seeding comments..."


puts "Seeding subcomments/replies..."


puts "Done seeding!"