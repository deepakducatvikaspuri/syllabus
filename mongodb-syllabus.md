### MongoDB

## Section 1: Introduction
# Introduction
# What is MongoDB
# The Key MongoDB Characteristics (and how they differ from SQL Databases)
# Understanding the MongoDB Ecosystem
# Installation of MongoDB

## Section 2: Understanding the Basics & CRUD Operations
# Understanding Databases, Collections & Documents
# Creating Databases & Collections
# Understanding JSON Data
# Comparing JSON & BSON
# Create, Read, Update, Delete (CRUD) & MongoDB
# Finding, Inserting, Deleting & Updating Elements
# Understanding "insertMany()"
# Diving Deeper Into Finding Data
# "update" vs "updateMany()"
# Understanding "find()" & the Cursor Object
# Understanding Projection
# Embedded Documents & Arrays
# Accessing Structured Data

## Section 3: Schemas & Relations: How to Structure Documents
# Why Do We Use Schemas?
# Structuring Documents
# Data Types
# Data Types & Limits
# Understanding Relations
# One To One Relations - Embedded
# One To Many - Embedded
# Many To Many - Embedded
# Using "lookUp()" for Merging Reference Relations
# Understanding Schema Validation
# Changing the Validation Action

## Section 4: Diving Into Create Operations
# Module Introduction
# Understanding "insert()" Methods
# Working with Ordered Inserts
# Understanding the "writeConcern"
# What is Atomicity?
# Importing Data

<!-- mongoimport --db="weekend3pmnodejs" --collection="person1" --file="C:\persons.json" --drop --jsonArray -->

## Section 5: Read Operations - A Closer Look
#  Module Introduction
#  Methods, Filters & Operators
#  Query Selectors & Projection Operators
#  Understanding "findOne()" & "find()"
#  Working with Comparison Operators
#  Querying Embedded Fields & Arrays
#  Understanding "$in" and "$nin"
#  "$or" and "$nor"
#  Understanding the "$and" Operator
#  Using "$not"
#  Diving Into Element Operators
#  Working with "$type"
#  Understanding Evaluation Operators - "$regex"
#  Understanding Evaluation Operators - "$expr"
#  Diving Deeper Into Querying Arrays
#  Using Array Query Selectors - "$size"
#  Using Array Query Selectors - "$all"
#  Using Array Query Selectors - "$elemMatch"
#  Understanding Cursors
#  Applying Cursors
#  Sorting Cursor Results
#  Skipping & Limiting Cursor Results
#  Using Projection to Shape our Results
#  Using Projection in Arrays
#  Understanding "$slice"

## Section 6: Update Operations
#  Updating Fields with "updateOne()", "updateMany()" and "$set"
#  Updating Multiple Fields with "$set"
#  Incrementing & Decrementing Values
#  Using "$min", "$max" and "$mul"
#  Getting Rid of Fields
#  Renaming Fields
#  Understanding "upsert()"
#  Updating Matched Array Elements
#  Updating All Array Elements
#  Finding & Updating Specific Fields
#  Adding Elements to Arrays
#  Removing Elements from Arrays
#  Understanding "$addToSet"

## Section 7: Understanding Delete Operations
#  Module Introduction
#  Understanding "deleteOne()" & "deleteMany()"
#  Deleting All Entries in a Collection

## Section 8: Working with Indexes
#  What Are Indexes & Why Do We Use Them?
#  Adding a Single Field Index
#  Indexes Behind the Scenes
#  Understanding Index Restrictions
#  Creating Compound Indexes
#  Using Indexes for Sorting
#  Understanding the Default Index
#  Configuring Indexes
#  Understanding Partial Filters
#  Applying the Partial Index
#  Understanding the Time-To-Live (TTL) Index
#  Query Diagnosis & Query Planning
#  Understanding Covered Queries
#  How MongoDB Rejects a Plan
#  Using Multi-Key Indexes
#  Understanding Text Indexes
#  Text Indexes & Sorting
#  Creating Combined Text Indexes
#  Using Text Indexes to Exclude Words
#  Setting the Default Language & Using Weights
#  Building Indexes

## Section 9: Working with Geospatial Data
#  Adding GeoJSON Data
#  Running Geo Queries
#  Adding a Geospatial Index to Track the Distance
#  Adding Additional Locations
#  Finding Places Inside a Certain Area
#  Finding Out If a User Is Inside a Specific Area
#  Finding Places Within a Certain Radius

## Section 10: Understanding the Aggregation Framework
#  What is the Aggregation Framework?
#  Getting Started with the Aggregation Pipeline
#  Using the Aggregation Framework
#  Understanding the Group Stage
#  Diving Deeper Into the Group Stage
#  Working with $project
#  Turning the Location Into a geoJSON Object
#  Transforming the Birthdate
#  Using Shortcuts for Transformations
#  Understanding the $isoWeekYear Operator
#  $group vs $project
#  Pushing Elements Into Newly Created Arrays
#  Understanding the $unwind Stage
#  Eliminating Duplicate Values
#  Using Projection with Arrays
#  Getting the Length of an Array
#  Using the $filter Operator
#  Understanding $bucket
#  Diving Into Additional Stages
#  How MongoDB Optimizes Your Aggregation Pipelines
#  Writing Pipeline Results Into a New Collection
#  Working with the $geoNear Stage

## Section 11: Transactions
#  What are Transactions?
#  A Typical Usecase
#  How Does a Transaction Work?




 ## Mongodb-syllabus

## Show Databases
- show dbs

## Switch Database
- use <database_name>

# Show Collectionsa
- show collections

# Run JavaScript File
- load("myScript.js")

# Databases and Collections

# Drop

- db.coll.drop()    // removes the collection and its index definitions
- db.dropDatabase() // double check that you are *NOT* on the PROD cluster... :-)

# Create Collection

# Create collection with a $jsonschema
- db.createCollection("contacts", {
   validator: {$jsonSchema: {
      bsonType: "object",
      required: ["phone"],
      properties: {
         phone: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         email: {
            bsonType: "string",
            pattern: "@mongodb\.com$",
            description: "must be a string and match the regular expression pattern"
         },
         status: {
            enum: [ "Unknown", "Incomplete" ],
            description: "can only be one of the enum values"
         }
      }
   }}
})

# Modify collection with a $jsonschema
db.runCommand( { collMod: "users",
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "username", "password" ],
         properties: {
            username: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            password: {
               bsonType: "string",
               minLength: 12,
               description: "must be a string of at least 12 characters, and is required"
            }
         }
      }
   }
} )

# CRUD

# Create
- db.coll.insertOne({name: "Max"})
- db.coll.insert([{name: "Max"}, {name:"Alex"}]) // ordered bulk insert
- db.coll.insert([{name: "Max"}, {name:"Alex"}], {ordered: false}) // unordered bulk insert
- db.coll.insert({date: ISODate()})
- db.coll.insert({name: "Max"}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})

# Read

- db.coll.findOne() // returns a single document
- db.coll.find()    // returns a cursor - show 20 results - "it" to display more
- db.coll.find().pretty()
- db.coll.find({name: "Max", age: 32}) // implicit logical "AND".
- db.coll.find({date: ISODate("2020-09-25T13:57:17.180Z")})
- db.coll.find({name: "Max", age: 32}).explain("executionStats") // or "queryPlanner" or - - "allPlansExecution"
- db.coll.distinct("name")

# Count
- db.coll.count({age: 32})          // estimation based on collection metadata
- db.coll.estimatedDocumentCount()  // estimation based on collection metadata
- db.coll.countDocuments({age: 32}) // alias for an aggregation pipeline - accurate count

# Comparison
- db.coll.find({"year": {$gt: 1970}})
- db.coll.find({"year": {$gte: 1970}})
- db.coll.find({"year": {$lt: 1970}})
- db.coll.find({"year": {$lte: 1970}})
- db.coll.find({"year": {$ne: 1970}})
- db.coll.find({"year": {$in: [1958, 1959]}})
- db.coll.find({"year": {$nin: [1958, 1959]}})

# Logical
- db.coll.find({name:{$not: {$eq: "Max"}}})
- db.coll.find({$or: [{"year" : 1958}, {"year" : 1959}]})
- db.coll.find({$nor: [{price: 1.99}, {sale: true}]})
- db.coll.find({
  $and: [
    {$or: [{qty: {$lt :10}}, {qty :{$gt: 50}}]},
    {$or: [{sale: true}, {price: {$lt: 5 }}]}
  ]
})

# Element
- db.coll.find({name: {$exists: true}})
- db.coll.find({"zipCode": {$type: 2 }})
- db.coll.find({"zipCode": {$type: "string"}})

# Aggregation Pipeline
- db.coll.aggregate([
  {$match: {status: "A"}},
  {$group: {_id: "$cust_id", total: {$sum: "$amount"}}},
  {$sort: {total: -1}}
])

# Text search with a "text" index
- db.coll.find({$text: {$search: "cake"}}, {score: {$meta: "textScore"}}).sort({score: {$meta: "textScore"}})

# Regex
- db.coll.find({name: /^Max/})   // regex: starts by letter "M"
- db.coll.find({name: /^Max$/i}) // regex case insensitive

# Array
- db.coll.find({tags: {$all: ["Realm", "Charts"]}})
- db.coll.find({field: {$size: 2}}) // impossible to index - prefer storing the size of the array & update it
- db.coll.find({results: {$elemMatch: {product: "xyz", score: {$gte: 8}}}})

# Projections
- db.coll.find({"x": 1}, {"actors": 1})               // actors + _id
- db.coll.find({"x": 1}, {"actors": 1, "_id": 0})     // actors
- db.coll.find({"x": 1}, {"actors": 0, "summary": 0}) // all but "actors" and "summary"

# Sort, skip, limit
- db.coll.find({}).sort({"year": 1, "rating": -1}).skip(10).limit(3)

# Read Concern
- db.coll.find().readConcern("majority")

# Update

- db.coll.update({"_id": 1}, {"year": 2016}) // WARNING! Replaces the entire document
- db.coll.update({"_id": 1}, {$set: {"year": 2016, name: "Max"}})
- db.coll.update({"_id": 1}, {$unset: {"year": 1}})
- db.coll.update({"_id": 1}, {$rename: {"year": "date"} })
- db.coll.update({"_id": 1}, {$inc: {"year": 5}})
- db.coll.update({"_id": 1}, {$mul: {price: NumberDecimal("1.25"), qty: 2}})
- db.coll.update({"_id": 1}, {$min: {"imdb": 5}})
- db.coll.update({"_id": 1}, {$max: {"imdb": 8}})
- db.coll.update({"_id": 1}, {$currentDate: {"lastModified": true}})
- db.coll.update({"_id": 1}, {$currentDate: {"lastModified": {$type: "timestamp"}}})

# Array
- db.coll.update({"_id": 1}, {$push :{"array": 1}})
- db.coll.update({"_id": 1}, {$pull :{"array": 1}})
- db.coll.update({"_id": 1}, {$addToSet :{"array": 2}})
- db.coll.update({"_id": 1}, {$pop: {"array": 1}})  // last element
- db.coll.update({"_id": 1}, {$pop: {"array": -1}}) // first element
- db.coll.update({"_id": 1}, {$pullAll: {"array" :[3, 4, 5]}})
- db.coll.update({"_id": 1}, {$push: {scores: {$each: [90, 92, 85]}}})
- db.coll.updateOne({"_id": 1, "grades": 80}, {$set: {"grades.$": 82}})
- db.coll.updateMany({}, {$inc: {"grades.$[]": 10}})
- db.coll.update({}, {$set: {"grades.$[element]": 100}}, {multi: true, arrayFilters: [{"element": {$gte: 100}}]})

# Update many
- db.coll.update({"year": 1999}, {$set: {"decade": "90's"}}, {"multi":true})
- db.coll.updateMany({"year": 1999}, {$set: {"decade": "90's"}})

# FindOneAndUpdate
- db.coll.findOneAndUpdate({"name": "Max"}, {$inc: {"points": 5}}, {returnNewDocument: true})

# Upsert
- db.coll.update({"_id": 1}, {$set: {item: "apple"}, $setOnInsert: {defaultQty: 100}}, {upsert: true})

# Replace
- db.coll.replaceOne({"name": "Max"}, {"firstname": "Maxime", "surname": "Beugnet"})

# Save
- db.coll.save({"item": "book", "qty": 40})

# Write concern
- db.coll.update({}, {$set: {"x": 1}}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})

# Delete

- db.coll.remove({name: "Max"})
- db.coll.remove({name: "Max"}, {justOne: true})
- db.coll.remove({}) // WARNING! Deletes all the docs but not the collection itself and its index definitions
- db.coll.remove({name: "Max"}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})
- db.coll.findOneAndDelete({"name": "Max"})