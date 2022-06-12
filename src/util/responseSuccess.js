module.exports = (res, data) => {
  return res.status(200).json({
    sucess: true,
    code: 200,
    data,
  });
};
