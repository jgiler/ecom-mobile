const mysql = require("mysql"); // allows us to connect to mysql
const router = require("express").Router();
require("dotenv").config(); // allows creation of .env file.

// creates connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "ecommerce",
});

connection.connect(); // connects to database

//
router.get("/products", function(req, res) {
  connection.query(
    "SELECT prices.price_id,products.product,prices.price,products.about,products.category,products.url FROM prices INNER JOIN Products ON prices.price_id = products.product_id GROUP BY price_id",
    function(err, data) {
      err ? res.send(err) : res.send({ products: data });
    }
  );
});

router.get("/contacts", function(req, res) {
  connection.query("SELECT * FROM contacts ORDER BY contact_id DESC", function(err, data) {
    err ? res.send(err) : res.json({ contacts: data });
  });
});

router.get("/productfilter/:category", function(req, res) {
  let category = req.params.category;
  connection.query(
    "SELECT * FROM products LEFT JOIN Prices ON products.product_id = prices.price_id WHERE category LIKE ?", // ? prevents sql injections. typing req.params.category instead of ? people are able to guess what is there in the url and change/mess with your database
    [category],
    function(err, data) {
      err ? res.send(err) : res.json({ products: data });
    }
  );
});


// BONUS (SOME WORK :O)





router.get('/productinvoice/:productID', function(req,res) {
  let productID = req.params.productID;
  connection.query('SELECT p.* FROM products p INNER JOIN prices pr ON pr.price_id = p.price_id WHERE p.product_id = ?', [productID], function(err, data){
    if (err) {
      res.send(err);
      return;
    }
    let myResponse = {
      product: data[0],
      contacts: []
    }
    connection.query('SELECT * FROM contacts WHERE product_id = ?', [productID], function(err, data) {
      if (err) {
        res.send(err);
        return;
      }
      myResponse.contacts = data
      res.json(myResponse);
      return;
    })

  })
})
// WORKING
router.post("/newcontact", function(req, res) {
  let {
    f_name,
    l_name,
    address,
    cell_number,
    email,
    comments,
    quantity,
    product_id
  } = req.body
  connection.query(
    "INSERT INTO contacts (f_name, l_name, address, cell_number, email, comments, quantity, product_id) VALUES (?,?,?,?,?,?,?,?)",
    [f_name, l_name, address, cell_number, email, comments,quantity, product_id],
    function(err, data) {
      err ? res.send(err) : res.json({ contacts: data });
    }
  );
});

router.delete("/deletecontact", function(req, res) {
  let email = req.body;
  connection.query("DELETE FROM contacts WHERE email=?",[email], function(err, data) {
    err ? res.send(err) : res.json({ contacts: data })
  }
  );
});

router.put("/updatecontact", function(req, res) {
  let {email, comments} = req.body;

  console.log('req.body - ',req.body)

  connection.query("UPDATE contacts SET comments = ? WHERE email = ?", [comments, email], function(err, data) {
    err ? res.send(err) : res.json({ contacts: data })
  });
});

module.exports = router;
