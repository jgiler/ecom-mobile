require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
let uri = process.env.ATLAS_URI;

// register middleware
app.use((req, res, next) => {
	// The 'x-forwarded-proto' check is for Heroku
	if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === "production") {
		return res.redirect('https://' + req.get('host') + req.url);
	}
	next();
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
app.use(morgan("dev", { stream: accessLogStream }));


// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI; // connection string for Atlas here
} else {
  uri = process.env.ATLAS_URI; // connection string for localhost mongo here
}

// connection to database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is live");
});

// import routes
const products = require("./routes/products");
const contacts = require("./routes/contacts");
const usersRouter = require('./routes/usersRouter')

// register apis
app.use("/products", products);
app.use("/contacts", contacts);
app.use('/users', usersRouter);

// Creating live connection to reactjs app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(port, () => {
  console.log(`Ecom-Refactor is running on port: ${port}`);
});
