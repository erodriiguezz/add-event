const User = require("../models/user");

module.exports = (app) => {
  app.get("/api/listUsers", (req, res) => {
    User.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });
};
