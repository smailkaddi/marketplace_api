// _____________PACKAGES NODEMAILER___________
const nodemailer = require("nodemailer")

// _____________SEND MAIL___________
exports.Email = async (req, res) => {
      const transport = nodemailer.createTransport({
      service: "gmail",
          auth: {
              user: 'cyassin95@gmail.com',//email
              pass: 'Sanasaida123'//password
          }
      })
  
      await transport.sendMail({
          from: 'flasn@gmail.Com',
          to: "cyassin95@gmail.com",
          subject: "The Winning",
          html: `<div className="email" style="
          border: 1px solid black;
          padding: 20px;
          font-family: sans-serif;
          line-height: 2;
          font-size: 20px; 
          ">
          <h2>Congratulation You Are The winner</h2>
          <p>Your Gift is coupon for Netflix <p>
          <p>DXRA2142647</p>
      
           </div>
      `
      })
}

       

           
            
