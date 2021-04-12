//__________________CALL MODEL____________________
const Client = require('../Models/Client.models');

const Product = require('../Models/Product.models');

const category = require('../Models/categories.models');
//______________________get all Product_____________________ 
exports.ProductList = (req, res) => {
    Product.find()
    .then(ClientInfos => {
          res.status(200).json(ClientInfos);
        }).catch(error => {
          console.log(error);
          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
};

//______________________get all Categories_____________________ 
exports.GETCATEGORIES = (req, res) => {
    category.find()
      .then(categoryInfos => {
        res.status(200).json(categoryInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
          message: "Error!",
          error: error
        });
      });
  };

  //______________________get Product By Category_____________________ 
exports.getProductById = (req, res) => {
    Product.find({
      category: req.params.category
      })
      .then(Product => {
        res.send(Product);
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving question."
        });
      });
  };

//______________________Sort by Price Products_____________________ 
exports.Price = (req, res) => {
    Product.find()
    .sort({ price: -1 }).then(ClientInfos => {
        res.status(200).json(ClientInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
}

//______________________Sort by Price Products_____________________ 
exports.Brand = (req, res) => {
    Product.find()
    .sort({ Titel: 1 }).then(ClientInfos => {
        res.status(200).json(ClientInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
}

// ______________________get Product by id__________________
exports.getProductById = (req, res) => {
    Product.findById(req.params.id)
        .then(Product => {
          res.status(200).json(Product);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id,
                    error: err
                });                
            }
            return res.status(500).send({
                message: "Error retrieving Product with id " + req.params.id,
                error: err
            });
        });
  };

//-------------------------Add Delivery-----------------------------

exports.PaymentAdd = (req, res) => {
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