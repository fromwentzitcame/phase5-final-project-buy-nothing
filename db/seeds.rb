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
belknap_lookout = Neighborhood.create(name: "Belknap Lookout", city: "Grand Rapids", state: "Michigan")
east_hills = Neighborhood.create(name: "East Hills", city: "Grand Rapids", state: "Michigan")
eastown = Neighborhood.create(name: "Eastown", city: "Grand Rapids", state: "Michigan")
fulton_heights = Neighborhood.create(name: "Fulton Heights", city: "Grand Rapids", state: "Michigan")
heartside = Neighborhood.create(name: "Heartside", city: "Grand Rapids", state: "Michigan")
heritage_hill = Neighborhood.create(name: "Heritage Hill", city: "Grand Rapids", state: "Michigan")
highland_park = Neighborhood.create(name: "Highland Park", city: "Grand Rapids", state: "Michigan")
john_ball = Neighborhood.create(name: "John Ball Park", city: "Grand Rapids", state: "Michigan")
midtown = Neighborhood.create(name: "Midtown", city: "Grand Rapids", state: "Michigan")
roosevelt_park = Neighborhood.create(name: "Roosevelt Park", city: "Grand Rapids", state: "Michigan")

puts "Seeding post categories..."
gift = Category.create(type: "gift")
ask = Category.create(type: "ask")
gratitude = Category.create(type: "gratitude")

puts "Seeding users..."
alona = User.create(first_name: "Alona", last_name: "Bernard", email: "alona@fakemail.com", password: "alona", neighborhood_id: belknap_lookout.id)
alona.profile_picture.attach(io: File.open('/app/assets/images/alona-bernard.jpg'), filename: 'alona-bernard.jpg', content_type: 'image/jpeg')
amir = User.create(first_name: "Amir", last_name: "Esrafili", email: "amir@fakemail.com", password: "amir", neighborhood_id: east_hills.id)
amir.profile_picture.attach(io: File.open('/app/assets/images/amir-esrafili.jpg'), filename: 'amir-esrafili.jpg', content_type: 'image/jpeg')
anastasia = User.create(first_name: "Anastasia", last_name: "Shuraeva", email: "anastasia@fakemail.com", password: "anastasia", neighborhood_id: eastown.id)
anastasia.profile_picture.attach(io: File.open('/app/assets/images/anastasia-shuraeva.jpg'), filename: 'anastasia-shuraeva.jpg', content_type: 'image/jpeg')
andrea = User.create(first_name: "Andrea", last_name: "Piccarello", email: "andrea@fakemail.com", password: "andrea", neighborhood_id: fulton_heights.id)
andrea.profile_picture.attach(io: File.open('/app/assets/images/andrea-piccarello.jpg'), filename: 'andrea-piccarello.jpg', content_type: 'image/jpeg')
anna = User.create(first_name: "Anna", last_name: "Shvets", email: "anna@fakemail.com", password: "anna", neighborhood_id: heartside.id)
anna.profile_picture.attach(io: File.open('/app/assets/images/anna-shvets.jpg'), filename: 'anna-shvets.jpg', content_type: 'image/jpeg')
bill = User.create(first_name: "Bill", last_name: "Turner", email: "bill@fakemail.com", password: "bill", neighborhood_id: heritage_hill.id)
bill.profile_picture.attach(io: File.open('/app/assets/images/bill-turner.jpg'), filename: 'bill-turner.jpg', content_type: 'image/jpeg')
daniel = User.create(first_name: "Daniel", last_name: "Xavier", email: "daniel@fakemail.com", password: "daniel", neighborhood_id: highland_park.id)
daniel.profile_picture.attach(io: File.open('/app/assets/images/daniel-xavier.jpg'), filename: 'daniel-xavier.jpg', content_type: 'image/jpeg')
dapo = User.create(first_name: "Dapo", last_name: "Abideen", email: "dapo@fakemail.com", password: "dapo", neighborhood_id: john_ball.id)
dapo.profile_picture.attach(io: File.open('/app/assets/images/dapo-abideen.jpg'), filename: 'dapo-abideen.jpg', content_type: 'image/jpeg')
farrah = User.create(first_name: "Farrah", last_name: "Piacquadio", email: "farrah@fakemail.com", password: "farrah", neighborhood_id: midtown.id)
farrah.profile_picture.attach(io: File.open('/app/assets/images/farrah-piacquadio.jpg'), filename: 'farrah-piacquadio.jpg', content_type: 'image/jpeg')
ibrahim = User.create(first_name: "Ibrahim", last_name: "Sayed", email: "ibrahim@fakemail.com", password: "ibrahim", neighborhood_id: roosevelt_park.id)
ibrahim.profile_picture.attach(io: File.open('/app/assets/images/ibrahim-sayed.jpg'), filename: 'ibrahim-sayed.jpg', content_type: 'image/jpeg')
jasper = User.create(first_name: "Jasper", last_name: "Mai", email: "jasper@fakemail.com", password: "jasper", neighborhood_id: belknap_lookout.id)
jasper.profile_picture.attach(io: File.open('/app/assets/images/jasper-mai.jpg'), filename: 'jasper-mai.jpg', content_type: 'image/jpeg')
jess = User.create(first_name: "Jess", last_name: "Nguyen", email: "jess@fakemail.com", password: "jess", neighborhood_id: east_hills.id)
jess.profile_picture.attach(io: File.open('/app/assets/images/jess-nguyen.jpg'), filename: 'jess-nguyen.jpg', content_type: 'image/jpeg')
josh = User.create(first_name: "Josh", last_name: "Thompson", email: "josh@fakemail.com", password: "josh", neighborhood_id: eastown.id)
josh.profile_picture.attach(io: File.open('/app/assets/images/josh-thompson.jpg'), filename: 'josh-thompson.jpg', content_type: 'image/jpeg')
kurt = User.create(first_name: "Kurt", last_name: "Chernaya", email: "kurt@fakemail.com", password: "kurt", neighborhood_id: fulton_heights.id)
kurt.profile_picture.attach(io: File.open('/app/assets/images/kurt-chernaya.jpg'), filename: 'kurt-chernaya.jpg', content_type: 'image/jpeg')
lauren = User.create(first_name: "Lauren", last_name: "Hodge", email: "lauren@fakemail.com", password: "lauren", neighborhood_id: heartside.id)
lauren.profile_picture.attach(io: File.open('/app/assets/images/lauren-hodge.jpg'), filename: 'lauren-hodge.jpg', content_type: 'image/jpeg')
mack = User.create(first_name: "Mack", last_name: "Abayev", email: "mack@fakemail.com", password: "mack", neighborhood_id: heritage_hill.id)
mack.profile_picture.attach(io: File.open('/app/assets/images/mack-abayev.jpg'), filename: 'mack-abayev.jpg', content_type: 'image/jpeg')
maira = User.create(first_name: "Maira", last_name: "Singh", email: "maira@fakemail.com", password: "maira", neighborhood_id: highland_park.id)
maira.profile_picture.attach(io: File.open('/app/assets/images/maira-singh.jpg'), filename: 'maira-singh.jpg', content_type: 'image/jpeg')
muhd = User.create(first_name: "Muhd", last_name: "Emir", email: "muhd@fakemail.com", password: "muhd", neighborhood_id: john_ball.id)
muhd.profile_picture.attach(io: File.open('/app/assets/images/muhd-emir.jpg'), filename: 'muhd-emir.jpg', content_type: 'image/jpeg')
nadia = User.create(first_name: "Nadia", last_name: "Nandini", email: "nadia@fakemail.com", password: "nadia", neighborhood_id: midtown.id)
nadia.profile_picture.attach(io: File.open('/app/assets/images/nadia-nandini.jpg'), filename: 'nadia-nandini.jpg', content_type: 'image/jpeg')
nahome = User.create(first_name: "Nahome", last_name: "Tadesse", email: "nahome@fakemail.com", password: "nahome", neighborhood_id: roosevelt_park.id)
nahome.profile_picture.attach(io: File.open('/app/assets/images/nahome-tadesse.jpg'), filename: 'nahome-tadesse.jpg', content_type: 'image/jpeg')
olenka = User.create(first_name: "Olenka", last_name: "Sergienko", email: "olenka@fakemail.com", password: "olenka", neighborhood_id: belknap_lookout.id)
olenka.profile_picture.attach(io: File.open('/app/assets/images/olenka-sergienko.jpg'), filename: 'olenka-sergienko.jpg', content_type: 'image/jpeg')
oliver = User.create(first_name: "Oliver", last_name: "North", email: "oliver@fakemail.com", password: "oliver", neighborhood_id: east_hills.id)
oliver.profile_picture.attach(io: File.open('/app/assets/images/oliver-north.jpg'), filename: 'oliver-north.jpg', content_type: 'image/jpeg')
olivia = User.create(first_name: "Olivia", last_name: "Munoz", email: "olivia@fakemail.com", password: "olivia", neighborhood_id: eastown.id)
olivia.profile_picture.attach(io: File.open('/app/assets/images/olivia-munoz.jpg'), filename: 'olivia-munoz.jpg', content_type: 'image/jpeg')
paige = User.create(first_name: "Paige", last_name: "Silva", email: "paige@fakemail.com", password: "paige", neighborhood_id: fulton_heights.id)
paige.profile_picture.attach(io: File.open('/app/assets/images/paige-silva.jpg'), filename: 'paige-silva.jpg', content_type: 'image/jpeg')
parker = User.create(first_name: "Parker", last_name: "Townsend", email: "parker@fakemail.com", password: "parker", neighborhood_id: heartside.id)
parker.profile_picture.attach(io: File.open('/app/assets/images/parker-townsend.jpg'), filename: 'parker-townsend.jpg', content_type: 'image/jpeg')
remi = User.create(first_name: "Remi", last_name: "Mansour", email: "remi@fakemail.com", password: "remi", neighborhood_id: heritage_hill.id)
remi.profile_picture.attach(io: File.open('/app/assets/images/remi-mansour.jpg'), filename: 'remi-mansour.jpg', content_type: 'image/jpeg')
roxanne = User.create(first_name: "Roxanne", last_name: "Franklin", email: "roxanne@fakemail.com", password: "roxanne", neighborhood_id: highland_park.id)
roxanne.profile_picture.attach(io: File.open('/app/assets/images/roxanne-franklin.jpg'), filename: 'roxanne-franklin.jpg', content_type: 'image/jpeg')
stefan = User.create(first_name: "Stefan", last_name: "Christensen", email: "stefan@fakemail.com", password: "stefan", neighborhood_id: john_ball.id)
stefan.profile_picture.attach(io: File.open('/app/assets/images/stefan-christensen.jpg'), filename: 'stefan-christensen.jpg', content_type: 'image/jpeg')
thyrone = User.create(first_name: "Thyrone", last_name: "Paas", email: "thyrone@fakemail.com", password: "thyrone", neighborhood_id: midtown.id)
thyrone.profile_picture.attach(io: File.open('/app/assets/images/thyrone-Paas.jpg'), filename: 'thyrone-Paas.jpg', content_type: 'image/jpeg')
victor = User.create(first_name: "Victor", last_name: "Amusan", email: "victor@fakemail.com", password: "victor", neighborhood_id: roosevelt_park.id)
victor.profile_picture.attach(io: File.open('/app/assets/images/victor-amusan.jpg'), filename: 'victor-amusan.jpg', content_type: 'image/jpeg')
victoria = User.create(first_name: "Victoria", last_name: "Santos", email: "victoria@fakemail.com", password: "victoria", neighborhood_id: midtown.id)
victoria.profile_picture.attach(io: File.open('/app/assets/images/victoria-santos.jpg'), filename: 'victoria-santos.jpg', content_type: 'image/jpeg')

puts "Seeding posts..."
p1 = Post.create(text: "Food processor, in great condition! Will let simmer.", likes: 0, fulfilled: false, category_id: gift.id, user_id: alona.id)
p1.picture.attach(io: File.open('/app/assets/postimages/food_processor.jpeg'), filename: 'food_processor.jpeg', content_type: 'image/jpeg')
p2 = Post.create(text: "Anyone need some storage shelves?", likes: 2, fulfilled: true, category_id: gift.id, user_id: amir.id)
p3 = Post.create(text: "We have more kale from our garden than we could possibly eat, there's enough for a few people!", likes: 1, fulfilled: false, category_id: gift.id, user_id: josh.id)
p4 = Post.create(text: "Various (opened) dry goods that I won't eat, come take your pick!", likes: 2, fulfilled: false, category_id: gift.id, user_id: ibrahim.id)
p5 = Post.create(text: "Come get some fresh cut lavender! We have far too much for ourselves.", likes: 4, fulfilled: false, category_id: gift.id, user_id: paige.id)
p6 = Post.create(text: "Doing some spring cleaning, see pictures attached.", likes: 0, fulfilled: false, category_id: gift.id, user_id: olivia.id)
p7 = Post.create(text: "We've got some clothes our daughter outgrew - anyone looking for new-to-you toddler clothes?", likes: 1, fulfilled: true, category_id: gift.id, user_id: kurt.id)
p8 = Post.create(text: "", likes: 1, fulfilled: false, category_id: ask.id, user_id: roxanne.id)
p9 = Post.create(text: "", likes: 0, fulfilled: false, category_id: ask.id, user_id: anna.id)
p10 = Post.create(text: "", likes: 1, fulfilled: false, category_id: ask.id, user_id: farrah.id)
p11 = Post.create(text: "", likes: 0, fulfilled: false, category_id: ask.id, user_id: andrea.id)
p12 = Post.create(text: "", likes: 2, fulfilled: false, category_id: ask.id, user_id: thyrone.id)
p13 = Post.create(text: "", likes: 4, fulfilled: false, category_id: gratitude.id, user_id: olenka.id)
p14 = Post.create(text: "", likes: 3, fulfilled: false, category_id: gratitude.id, user_id: daniel.id)
p15 = Post.create(text: "", likes: 6, fulfilled: false, category_id: gratitude.id, user_id: lauren.id)

puts "Seeding comments..."
c1 = Comment.create(text: "", likes: 0)

puts "Seeding subcomments/replies..."


puts "Done seeding!"