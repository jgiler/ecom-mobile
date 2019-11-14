const router = require("express").Router();
let Contact = require("../models/contact.model");

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find({});
    console.log("get route product", contacts);
    res.send(contacts);
  } catch {
    console.log("get contacts failed");
  }
});

router.post("/add", async (req, res) => {
  let body = req.body;
  try {
    const add = await Contact.create(body);
    res.send(add);
  } catch {
    console.log("failed post contact");
  }
});

module.exports = router;
