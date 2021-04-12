module.exports = function (app) {
    var Admin = require('../Controller/Admin');
    //------------------------get all Seller---------------------
    app.get('/admin', Admin.AdminList);


    //__________________________add Admins____________________
    app.post('/admin/add', Admin.AdminADD);

    //-------------------------login User-----------------------------
    app.post('/admin/login', Admin.AdminLogin);

    //-------------------------Delivry Get-----------------------------
    app.get('/Delivry', Admin.DelivryList);

    //-------------------------Delivry Add-----------------------------
    app.post('/Delivry/add', Admin.DeliveryAdd);
    //-------------------------Delivry Update-----------------------------
    app.put('/Delivry/update/:id', Admin.DeliveryAdd);
    //-------------------------Delivry delete-----------------------------
    app.delete('/Delivry/delete/:id', Admin.DeleteDelivery);

    // ______________________get delivry by id__________________
        app.get('/Delivry/:id', Admin.getDeliveryById);

            //__________________________add Admins____________________
    app.post('/categories/add', Admin.CatyAdd);
}