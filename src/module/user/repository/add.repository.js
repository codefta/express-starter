const { getUserByIdRepository } = require(".");
const { databaseError } = require("../../../util/customError");

module.exports = async function (ctx, data) {
  const collection = ctx.mongoDb.db(ctx.mainDb).collection(ctx.collection);

  const userToInsert = {
    _id: data.id,
    name: data.name,
    email: data.email,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };

  try {
    await collection.insertOne(userToInsert);

    const user = await getUserByIdRepository(ctx, data.id);

    return user;
  } catch (e) {
    throw databaseError(e);
  }
};
