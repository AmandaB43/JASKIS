// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use jaskis

// 2. Create a collection called bounties
db.createCollection('bounties')

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
db.people.insertOne(,{"name": "Thanoceros"})

// 2. Query for all bounties in the bounties collection
db.bounties.find()

// 3. Insert many bounties at once using the given objects
db.collection.insertMany()
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
{location: "Grasslands"}
// 2. Query for all bounties with a reward worth 10000 or more
{reward:+10000}
// 3. Query for all bounties, but exclude the client attribute from being shown
{   name: "Thanoceros",
    species: "Rhinoceros",
    location: "Grasslands",
    wantedFor: "Eating too much grass",
    reward: 10000,
    captured: false
  }
// 4. Query for a Groundhog in the Woodlands
{ species:"groundhog",
  location:"woodlands"
}
// Update and Delete
// 1. Update the reward for Polarwind to 10000
db.reward.update()
// 2. Remove Lokinkajou
deleteOne()

// 3. Delete all bounties sent by Songbird
deleteMany()
// 4. Update all captured statuses to true
updateMany()