const { MongoClient } = require("mongodb");
const config = require("../config");

let client;

async function connect() {
  try {
    if (!client) {
      client = new MongoClient(config.mongodb.uri, { useNewUrlParser: true });

      await client.connect();
      client = client.db(config.mongodb.db);
    }

    return client;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

module.exports = connect();
