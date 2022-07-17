const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => res.json("User added."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete").delete((req, res) => {
  User.findOne({ email: req.query.email })
    .then((user) => {
      User.findByIdAndDelete(user._id.toString())
        .then(() => res.json("User has been deleted"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;
