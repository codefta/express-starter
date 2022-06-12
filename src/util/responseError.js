module.exports = (res, error) => {
  res.status(error.code || 500).json({
    success: false,
    code: error.code || 500,
    message: error.code !== 500 ? error.message : "Internal server error",
  });
};
