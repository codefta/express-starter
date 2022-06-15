const { databaseError, notFoundError } = require("../../../util/customError");
const userEntity = require("../entity/user.entity");

module.exports = async function (ctx, id) {
  const collection = ctx.mongoDb.db(ctx.mainDb).collection(ctx.collection);

  const filter = {
    _id: id,
  };

  try {
    const result = await collection.findOne(filter);
    if (!result) {
      throw notFoundError("User not found");
    }

    const user = await userEntity({
      id: result.id,
      name: result.name,
      email: result.email,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    });

    return user;
  } catch (e) {
    throw databaseError(e);
  }
};
