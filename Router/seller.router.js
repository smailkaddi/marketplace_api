module.exports = function (app) {
    // --------------------Caling Controller File----------------- 
    var seller = require('../Controller/Seller');


    //------------------------Add Seller---------------------
    app.post('/seller/add', seller.SellerADD);

    //------------------------get all Seller---------------------
    app.get('/seller', seller.SellerList);
    //-------------------------login User-----------------------------
    app.post('/seller/login', seller.SellerLogin);

    //-------------------------Add Product-----------------------------
    app.post('/seller/prooduct/add', seller.productAdd);

    //-------------------------Display Product-----------------------------
    app.get('/product', seller.ProductList);
    
    //-------------------------Delete Product-----------------------------
    app.delete('/product/delete/:id', seller.DeleteProduct);

    //-------------------------Product Update-----------------------------
    app.put('/product/update/:id', seller.UpdateProduct);

    
    // ______________________get Product by id__________________
    app.get('/product/:id', seller.getProductById);
    
        // ______________________get Product by idseller__________________
    app.get('/product/seller/:idSeller', seller.getProductByname);

    // ______________________get Seller by name __________________
    app.get('/seller/name/:Username', seller.GetSellerbyName);



        //-------------------------Product Update-----------------------------
        app.put('/product/update/name/:Username', seller.buyPack);

                //-------------------------Logout superAdmin-----------------------------
                app.get('/seller/logout', seller.sellerLogout);














                
}
