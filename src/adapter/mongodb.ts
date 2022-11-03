import { MongoClient } from "mongodb";
import config from "../config";

let client: any;

export async function mongodb() {
  try {
    if (!client) {
      client = new MongoClient(config.mongodb.uri);

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
