const db = require("../../config/config");
const ObjectId = require("mongodb").ObjectId;

const insertFile = async (schema) => {
  const client = await db();
  await client.connect();

  try {
    const result = await client
      .db("Test64")
      .collection("Test64")
      .insertOne(schema);
    return result.insertedId;
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
};

const getFile = async (id) => {
  const client = await db();
  await client.connect();
  try {
    const result = await client
      .db("Test64")
      .collection("Test64")
      .findOne({
        _id: ObjectId(id),
      });
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

module.exports = {
  insertFile,
  getFile,
};
