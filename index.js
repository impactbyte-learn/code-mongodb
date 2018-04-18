const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const MONGO_URL = "mongodb://localhost:27017";

// Database Name
const dbName = "impactodo";

const sampleTodos = [
  {
    text: "Learn MongoDB"
  },
  {
    text: "Create todo"
  },
  {
    text: "Code Node.js"
  }
];

const insertTodo = function(db, documents, callback) {
  // Get the documents collection
  const collection = db.collection("todos");

  // Insert some documents
  collection.insertMany(documents, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted 3 todos");
    callback(result);
  });
};

// Use connect method to connect to the server
MongoClient.connect(MONGO_URL, function(err, client) {
  assert.equal(null, err);

  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertTodo(db, sampleTodos, () => {
    client.close();
  });
});
