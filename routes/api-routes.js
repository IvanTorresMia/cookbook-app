// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport.js");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  //built in to express
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

// route to get all recipies, with their ingridients, joined together
  app.get("/api/Recipie", function(req, res) {
    db.Recipie.findAll({
      include: [db.Ingridients]
    }).then(function(dbRecipie) {
      res.json(dbRecipie);
    });
  });

  // Route to get on recipie through the ID in the id parameter with ingridients joined
  app.get("/api/Recipie/:id", function(req, res) {
   
    db.Recipie.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Ingridients]
    }).then(function(dbRecipie) {
      res.json(dbRecipie);
    });

  });

// route to create a recipie
  app.post("/api/Recipie", function(req, res) {
    console.log(req.body);
    db.Recipie.create(req.body).then(function(dbRecipie) {
      res.json(dbRecipie);
    });
  });

  // route to delete Recipie with rew.params id, when deleted it will delete all ingridients as well.
  app.delete("/api/Recipie/:id", function(req, res) {
    db.Recipie.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRecipie) {
      res.json(dbRecipie);
    });
  });


// START OF INGRIDIENT ROUTES


// route to create new ingridient

  app.post("/api/Ingridients", function(req, res) {
    db.Ingridients.create(req.body).then(function(dbIngridients) {
      res.json(dbIngridients);
    });
  });

  // Incase we get to deleting specific ingridients this is the route
  app.delete("/api/Ingridients/:id", function(req, res) {
    db.Ingridients.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbIngridients) {
      res.json(dbIngridients);
    });
  });

  // If we get to being able to update an ingridient. This is the route
  app.put("/api/Ingridients", function(req, res) {
    db.Ingridients.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbIngridients) {
      res.json(dbIngridients);
    });
  });

};
