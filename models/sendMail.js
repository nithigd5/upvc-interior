const nodemailer = require("nodemailer");
import mailConfig from './mail.config'

async function sendContactMail(title, body, to) {
    const transporter = nodemailer.createTransport({
        host: mailConfig.host,
        port: mailConfig.port,
        secure: true, // use TLS
        auth: {
            user: mailConfig.username,
            pass: mailConfig.password,
        },
    });
    let adminMail = await sendToAdmin(transporter, title, body)
    let userMail = await sendToUser(transporter, title, body, to)
}

async function sendToAdmin(transporter, title, body) {

    let html = `<style>
    body{
      font-family:"Poppins";
      }
    </style>
    
    <h1 style="margin:auto; text-align:center; color:#2196F3; ">New Customer has Contacted you.</h1>
        <br/>
    <div style=" width:100%; display:grid; grid-template-columns:1fr 1fr; grid-gap:10px; place-items:center;">
      <h2 style="color: gray; grid-column-end:span 2;">Customer Details</h2>
      
      <p>
      <b style="color:#2196F3;">Name: </b><span style="color:gray;">${body.name}</span>
      </p>
      
      <p>
      <b style="color:#2196F3;">Phone: </b><span style="color:gray;">${body.phone}</span>
      </p>
      
     <p>
      <b style="color:#2196F3;">Email: </b><span style="color:gray;">${body.email}</span>
      </p>
      
     <p>
      <b style="color:#2196F3;">Subject: </b><span style="color:gray;">${body.subject}</span>
      </p>
      
     <div style=" grid-column-end:span 2;">
          <b style="color:#2196F3;">Message: </b><p style="color:gray;">${body.message}</p>
      </div>
    
    </div>
    
    <div  style="text-align:center;">
    <b>
        Kindly contact them.
    </b>  
    </div>
    
    <h2 style="text-align:right;">
      Thank You, Admin
    </h2>`

    const payload = {
        from: 'UPVC Interior < admin@upvcinterior.com > ', // sender address
        to: process.env.ADMIN_MAIL, // list of receivers
        subject: "New Customer Contacted, Kindly Please Check and Reply as soon", // Subject line
        // text: "Hello world?", // plain text body
        html: html, // html body
    }
    let info = await transporter.sendMail(payload)

    return info
}

async function sendToUser(transporter, title, body, to) {
    let html = `
    <style >
    body{
    font-family:"Poppins";
    }
      
      h1{
      color:#2196F3;
      }
    </style>
    <h1 style="margin:auto; text-align:center; ">Thank You for contacting us.</h1>
    <br/><p style="padding:10px; font-size:25px; color:gray;">We will contact you soon as possible, please stay connect with us by following us on twitter</p>
    <div style="text-align:center; font-size:20px;">
      <div>Our Contact Details:<div/>
    <b style="color:gray;">Phone: 6374363396, Mail: g.d.nithi5@gmail.com</b> 
    </div>
    <h3 style="text-align:left";>
    Thank You, Dream Interiors.
    </h3>`;

    const payload = {
        from: 'UPVC Interior < admin@upvcinterior.com > ', // sender address
        to: to, // list of receivers
        subject: title, // Subject line
        // text: "Hello world?", // plain text body
        html: html, // html body
    }

    let info = await transporter.sendMail(payload)

    return info
}

export default sendContactMail;