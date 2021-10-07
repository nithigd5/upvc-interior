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
    const payload = {
        from: 'UPVC Interior < admin@upvcinterior.com > ', // sender address
        to: process.env.ADMIN_MAIL, // list of receivers
        subject: "New Customer Contacted, Kindly Please Check and Reply as soon", // Subject line
        // text: "Hello world?", // plain text body
        html: `<b>${body}</b>`, // html body
    }
    let info = await transporter.sendMail(payload)

    return info
}

async function sendToUser(transporter, title, body, to) {
    const payload = {
        from: 'UPVC Interior < admin@upvcinterior.com > ', // sender address
        to: to, // list of receivers
        subject: title, // Subject line
        // text: "Hello world?", // plain text body
        html: `<b>${body}</b>`, // html body
    }

    let info = await transporter.sendMail(payload)

    return info
}

export default sendContactMail;