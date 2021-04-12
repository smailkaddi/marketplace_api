//__________________CALL MODEL____________________
const Admin = require('../Models/Admin.models');
const Delivery = require('../Models/Livreur.models');
const Category = require('../Models/categories.models');
//Call Packages JSON Web Token & BCRYPT
const jwt = require('jsonwebtoken');
//A library to help you hash passwords.
const bcrypt = require('bcrypt');

//______________________get all Admin_____________________ 
exports.AdminList = (req, res) => {
  Admin.find()
    .then(AdminInfos => {
      res.status(200).json(AdminInfos);
    }).catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error
      });
    });
};


//------------------------Admin authentication---------------------
exports.AdminADD = (req, res) => {
  //10==saltRounds
  bcrypt.hash(req.body.Password, 10, function (err, hashPassword) {
    if (err) {
      res.json({
        error: err
      })
    }
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const login = req.body.login;
    const Password = hashPassword;
    const role = "Admin";
    const AdminPush = new Admin({
      FirstName,
      LastName,
      Email,
      login,
      Password,
      role
    });
    AdminPush
      .save()
      .then(() => res.json("Admin authentication successfully"))
      .catch((err) => res.status(400).json("Error :" + err));
  });
}


//-------------------------login User-----------------------------

exports.AdminLogin = (req, res) => {

  let login = req.body.login;
  let Password = req.body.Password;

  Admin.findOne({
      login: login
    })
    .then(Admin => {

      if (Admin) {
        bcrypt.compare(Password, Admin.Password, function (err, result) {
          if (err) {
            res.json({
              error: err
            })
          }
          if (result) {
            let token = jwt.sign({
              login: login
            }, 'tokenkey', (err, token) => {
              res.cookie("token", token)
              res.json({
                token: token
              })
            })
          } 
          
        })
      } else {
        res.json({
          message: 'Admin not found'
        })
      }
    }).catch((err) => res.status(400).json("Error :" + err));
}


//______________________get all Delivery_____________________ 
exports.DelivryList = (req, res) => {
  Delivery.find()
    .then(DeliveryInfos => {
      res.status(200).json(DeliveryInfos);
    }).catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error
      });
    });
};


//-------------------------Add Delivery-----------------------------

exports.DeliveryAdd = (req, res) => {
  const delivery = new Delivery({
    Delivry_Name: req.body.Delivry_Name,
    Type: req.body.Type,
    role : "Delivry"
  });
  //Save
  delivery.save().then(data => {
    res.status(200).json(data);
  }).catch(err => {
    res.status(500).json({
      message: "Fail!",
      error: err.message
    });
  });
};

// ______________________get Delivery by id__________________
exports.getDeliveryById = (req, res) => {
  Delivery.findById(req.params.id)
      .then(Delivery => {
        res.status(200).json(Delivery);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Delivery not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving Category with id " + req.params.id,
              error: err
          });
      });
};
//________________________updating Delivery____________________
exports.UpdateDelivery = (req, res) => {
  // Find Delivery By ID and update it
  Delivery.updateOne({
      _id: req.params.id
    }, {
      Delivry_Name: req.body.Delivry_Name,
      Type: req.body.Type,
      role : "Delivry"
    })
    .then(() => res.status(201).json("Delivery updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
};

//___________________________delete Delivery______________________
exports.DeleteDelivery = (req, res) => {
  const {id} = req.params;
  Delivery.findOneAndDelete({_id: id})
      .then(Delivery => {
          if(!Delivery) {
            res.status(404).json({
              message: "Does Not exist a Delivery with id = ",
              error: "404",
            });
          }
          res.status(200).json({});
      }).catch(err => {
          return res.status(500).send({
            message: "Error -> Can NOT delete a Delivery with id = ",
            error: err.message
          });
      });
};

//___________________________Add Categories_____________________
exports.CatyAdd = (req, res) => {
  const category = new Category({
    CategoryName: req.body.CategoryName,
  });
  //Save
  category.save()
  .then(() => res.status(201).json("Categories ADDED successfully"))
  .catch((err) => res.status(400).json("Error :" + err));
};