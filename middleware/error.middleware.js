const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    stack: err.stack,
  });
};

module.exports = globalErrorHandler;
