const { v4: uuidv4 } = require("uuid");
const userEntity = require("../entity/user.entity");
const { addUserRepository } = require("../repository");
const userResponse = require("../response/user.response");

module.exports = async function (ctx, data) {
  const user = await userEntity({
    id: uuidv4(),
    name: data.name,
    email: data.email,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  const userAdded = await addUserRepository(ctx, user);

  const userToResponse = await userResponse({
    id: userAdded.id,
    name: userAdded.name,
    email: userAdded.email,
    createdAt: userAdded.createdAt,
    updatedAt: userAdded.updatedAt,
  });

  return userToResponse;
};
