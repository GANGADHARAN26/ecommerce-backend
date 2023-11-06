const nodemailer=require('nodemailer');
const asyncHandler = require('express-async-handler');
const dotenv=require('dotenv').config()



const sendEmail=asyncHandler(async(data,req,res)=>{
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });
  
async function main() {
  const info = await transporter.sendMail({
    from: 'gangadharana01@gmail.com',
    to: data.to, 
    subject: data.subject, 
    text: data.text, 
    html: data.htm, 
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

})
module.exports=sendEmail