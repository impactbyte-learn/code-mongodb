const mongodb = require("mongodb");
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

const insertTodo = (db, documents, callback) => {
  db.collection("todos").insert(documents, (err, result) => {
    assert.equal(err, null);
    console.log("Inserted 3 todos");
    callback(result);
  });
};

const findTodo = (db, callback) => {
  db
    .collection("todos")
    .find()
    .toArray((err, result) => {
      assert.equal(err, null);
      console.log("All todos");
      callback(result);
    });
};

// Use connect method to connect to the server
mongodb.MongoClient.connect(MONGO_URL, (err, client) => {
  assert.equal(null, err);

  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertTodo(db, sampleTodos, () => {
    console.log("inserted...");
  });

  findTodo(db, result => {
    console.log(result);
    client.close();
  });
});
