const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Task',
    path: 'add-product'
  });
};
exports.postAddProduct = (req, res) => {
    const {title} = req.body;
    const product = new Product(null, title);
    console.log(product);
    product
      .save()
      .then(() => {
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };

