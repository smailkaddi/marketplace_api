//__________________CALL MODEL____________________
const SuperAdmin = require('../Models/superAdmin.models');
const Admin = require('../Models/Admin.models');
const Seller = require('../Models/Seller.models');
//Call Packages JSON Web Token & BCRYPT
const jwt=require('jsonwebtoken');
//A library to help you hash passwords.
const bcrypt=require('bcrypt');

//______________________get all Seller_____________________ 
exports.SellerList = (req, res) => {
    Seller.find()
    .then(SellerInfos => {
          res.status(200).json(SellerInfos);
        }).catch(error => {
          console.log(error);
          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
};

//________________________confirmer chaque inscription d’un vendeur____________________
exports.ConfirmerSeller = (req, res) => {
    // Find seller By ID and update it
    Seller.updateOne(
                     {_id: req.params.id},
                      {
                        status: req.body.status
                      }
                    )
    .then(() => res.status(201).json("seller confirmed successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
};

//__________________________add Admin____________________
exports.AddAdmins = (req, res) => {
  bcrypt.hash(req.body.Password, 10, function(err, hashPassword) {
    if (err) {
      res.json({error : err})    
    }
const FirstName = req.body.FirstName;
const LastName = req.body.LastName;
const Email = req.body.Email;
const login = req.body.login;
const Password = hashPassword;
const role = "Admin"
const adminPush = new Admin({
  FirstName,
  LastName,
  Email,
  login,
  Password,
  role
});
adminPush
  .save()
  .then(() => res.json("Admin authentication successfully"))
  .catch((err) => res.status(400).json("Error :" + err));
});
};

//______________________get all Admins_____________________ 
exports.AdminsList = (req, res) => {
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

//------------------------SuperAdmin authentication---------------------
exports.SuperAdminADD = (req, res) => {
  //10==saltRounds
  bcrypt.hash(req.body.Password, 10, function(err, hashPassword) {
      if (err) {
        res.json({error : err})    
      }
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Email = req.body.Email;
  const login = req.body.login;
  const Password = hashPassword;
  const role = "SuperAdmin"
  const SuperadminPush = new SuperAdmin({
    FirstName,
    LastName,
    Email,
    login,
    Password,
    role
  });
  SuperadminPush
    .save()
    .then(() => res.json("SupperAdmin authentication successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
});
}

//-------------------------login User-----------------------------

exports.SuperAdminLogin = (req, res) => {

  let login=req.body.login;
  let Password=req.body.Password;

SuperAdmin.findOne({login : login})
.then(superadmin => {

if(superadmin){
  bcrypt.compare(Password, superadmin.Password, function(err, result){
      if (err) {
          res.json({
            error : err
          })
        }
     if(result){
        let token=jwt.sign({login :login},'tokenkey',(err,token) => {
          res.cookie("token", token)  
          res.json({
              token : token
          })
        })
     }
     
  })
}else{
  res.json({
      message : 'SuperAdmin not found'
  })
}
}).catch((err) => res.status(400).json("Error :" + err));
}

//___________________________delete Admin______________________
exports.deleteAdmin = (req, res) => {
  const {id} = req.params;
  Admin.findOneAndDelete({_id: id})
      .then(admin => {
          if(!admin) {
            res.status(404).json({
              message: "Does Not exist a admin with id = " + id,
              error: "404",
            });
          }
          res.status(200).json({});
      }).catch(err => {
          return res.status(500).send({
            message: "Error -> Can NOT delete a categorie with id = " + id,
            error: err.message
          });
      });
};

//________________________updating Admin____________________

exports.updateadmin = (req, res) => {
  bcrypt.hash(req.body.Password, 10, function(err, hashPassword) {
  if (err) {
    res.json({error : err})       
  }
  const FirstName = req.body.FirstName;
const LastName = req.body.LastName;
const Email = req.body.Email;
const login = req.body.login;
const Password = hashPassword;
// Validate
// if(!FirstName || !LastName || !Email || !login || !Password) {
// return({
//     message: "filde content can not be empty"
// });
// }
  Admin.updateOne(
    {_id: req.params.id},
    {
  FirstName: req.body.FirstName,
  LastName: req.body.LastName,
  Email: req.body.Email,
  login: req.body.login,
  Password: hashPassword,

})

.then(Admin => {
  if(!Admin) {

    return res.status(404).send({
      message: "Admin not found with id " + req.params._id
  });

  }
  res.status(201).json("Admin UPDATED successfully");
}).catch(err => {

  if(err.kind === 'ObjectId') {
    return res.status(404).send({
        message: "Admin not found with id " + req.params.id
    });                
}
return res.status(500).send({
    message: "Error updating Admin with id " + req.params.id
  });
  })
});
}


// ______________________get admin by id__________________
exports.admin = (req, res) => {
  Admin.findById(req.params.id)
      .then(Admin => {
        res.status(200).json(Admin);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Admin not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving Admin with id " + req.params.id,
              error: err
          });
      });
};





//___________________________delete seller______________________
exports.deleteSeller = (req, res) => {
  const {id} = req.params;
  Seller.findOneAndDelete({_id: id})
      .then(seller => {
          if(!seller) {
            res.status(404).json({
              message: "Does Not exist a seller with id = " + id,
              error: "404",
            });
          }
          res.status(200).json({});
      }).catch(err => {
          return res.status(500).send({
            message: "Error -> Can NOT delete a seller with id = " + id,
            error: err.message
          });
      });
};





//________________________updating Seller____________________
exports.updateSeller = (req, res) => {
  // Find Seller By ID and update it
  Seller.updateOne(
                   {_id: req.params.id},
                    {
                      status : req.body.status,
                      type : req.body.type
                    }
                  )
  .then(() => res.status(201).json("Seller updated successfully"))
  .catch((err) => res.status(400).json("Error :" + err));
};
// ______________________get seller by id__________________
exports.seller = (req, res) => {
  Seller.findById(req.params.id)
      .then(Seller => {
        res.status(200).json(Seller);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Seller not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving Seller with id " + req.params.id,
              error: err
          });
      });
};





//-------------------------Logout Admin---------------------------

exports.SuperAdminLogout = (req, res) => {
  const deconnect = res.clearCookie("token")

  res.json({
      message: 'SuperAdmin is Signout !!'
  })
}
