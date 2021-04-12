module.exports = function (app) {
    // --------------------Caling Controller File----------------- 
    var superAdmin = require('../Controller/superAdmin');

    //------------------------get all Seller---------------------
    app.get('/seller', superAdmin.SellerList);

    //-------------------confirmer chaque inscription d’un vendeur----------------------
    app.post('/Seller/update', superAdmin.ConfirmerSeller);

    //__________________________add Admins____________________
    app.post('/admin/add', superAdmin.AddAdmins);

    //______________________get all Admins_____________________ 
    app.get('/admin', superAdmin.AdminsList);

    //------------------------SuperAdmin authentication---------------------
    app.post('/SuperAdmin/add', superAdmin.SuperAdminADD);

    //-------------------------login User-----------------------------
    app.post('/SuperAdmin/login', superAdmin.SuperAdminLogin);

    //-------------------------Logout superAdmin-----------------------------
    app.get('/SuperAdmin/logout', superAdmin.SuperAdminLogout);

    //___________________________delete admin______________________
    app.delete('/admin/delete/:id', superAdmin.deleteAdmin);

    
    //___________________________delete admin______________________
    app.delete('/seller/delete/:id', superAdmin.deleteSeller);

    
    //________________________updating admin____________________
    app.put('/admin/update/:id', superAdmin.updateadmin);

    // ______________________get category by id__________________
    app.get('/admin/:id', superAdmin.admin);

    //________________________updating Seller____________________
    app.put('/seller/update/:id', superAdmin.updateSeller);


    // ______________________get category by id__________________
    app.get('/seller/:id', superAdmin.seller);





}