module.exports = function(app) {
	const cors = require("cors")
	// --------------------Caling Controller File----------------- 
	var Emails = require('../Controller/Email_Controller');
	// --------------------Send Mail-----------------
	app.post('/send_mail', cors(),Emails.Email);

}