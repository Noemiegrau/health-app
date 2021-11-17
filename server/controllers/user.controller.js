const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// RETRIEVE ALL Users from the database.
exports.findAll = (req, res) => {
    User.findAll({ 
        attributes: { exclude: ['password'] }
     })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
};


// FIND A SINGLE User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
        id: id
        },
    })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
};


// CREATE and Save a new User
exports.create = (req, res) => {
    // // Validate request
    // if (!req.body.title) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
  
    // Create a User
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    };
  
    // Save User in the database
    User.create(user)
      .then(data => {
        // declare session variables
        req.session.save(() => {
          req.session.user_id = data.id;
          req.session.email = data.email;
          req.session.loggedIn = true; // IMPORTANT: THIS MEAN AFTER THE USER CREATES THEIR ACCOUNT THEY ARE AUTOMATICALLY CONSIDERED LOGGED IN
    
          res.json(data);
        })
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
};

// LOGIN route
exports.login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(data => {
    if (!data) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const checkPassword = data.validPassword(req.body.password);

    if (!checkPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

      // declare session variables
      req.session.save(() => {
        req.session.user_id = data.id;
        req.session.email = data.email;
        req.session.loggedIn = true;

      res.json({ user: data, message: 'You are now logged in!' });
      });
    });
};

// UPDATE a User with the specified id in the request
exports.update = (req, res) => {
  // pass in req.body instead of only updating what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

// DELETE a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };

// LOGOUT route
exports.logout = (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
};
