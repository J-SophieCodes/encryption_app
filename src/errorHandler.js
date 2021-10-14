const errorHandler = err => {
  if (err) {
    console.error('Pipeline failed', err);
  } else {
    console.log('Pipeline succeeded');
  }
}

module.exports = errorHandler;