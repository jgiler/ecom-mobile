const router = require("express").Router();
let Product = require("../models/product.model");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err){
    console.log(err, 'products failed');
  }
});

router.post("/add", async (req, res) => {
  let body = req.body;
  try {
    const add = await Product.create(body);
    res.send(add);
  } catch (err){
    console.log(err, "failed post product");
  }
});

module.exports = router;
