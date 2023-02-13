var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let products = [
    {
      number: 1,
      name: 'IPHONE 11',
      category: 'Mobile',
      description: 'it is good phone',
      price: '150000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHuJ6Kzhxe5zeqQHX8ENAiWJQlxIIWm7qkg&usqp=CAU',
    },

    {
      number: 2,
      name: 'ONE PlUS',
      category: 'Mobile',
      description: 'it is a good phone',
      price: '70000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DRln1Mua597TNpqISmUq4epNuyTMg1i4dw&usqp=CAU',
    },
    {
      number: 3,
      name: 'OPPO 11X',
      category: 'Mobile',
      description: 'it is a good phone',
      price: '30000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0x5y5hvVlEk6k6JNrRZJgf6zV_cH9dKqQw&usqp=CAU',

    },
    {
      number: 4,
      name: 'MI NOTE 9 PRO',
      category: 'Mobile',
      description: 'it is a good phone',
      price: '20000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2t-_zfKlNlsgt8yertespJd07azS3VL1MhQ&usqp=CAU',

    },]
  res.render('admin/view-products', { admin: true, products });
});
router.get('/add-product', function (req, res) {
  res.render('admin/add-product')

})
router.post('/add-product', function (req, res) {
  console.log(req.body);
  console.log(req.files.image);
})

module.exports = router;
