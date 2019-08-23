const productController = require('./controllers/productController.js');
const mainController = require('./controllers/mainController.js');
const signUpController = require('./controllers/signUpController.js');

const router = {
  products: productController,
  signup: signUpController,
  default: mainController
};

module.exports = router;
