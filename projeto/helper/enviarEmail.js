const nodemailer = require('nodemailer');
const emailPrincipal = require('../oculto/email')
const senhaEmail = require('../oculto/senhaEmail')

module.exports = 
// Método que enviar email para o usuario
function enviarEmail (email, titulo, html, msg){
        
    const transport = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: emailPrincipal,
            pass: senhaEmail
        }
    });

    transport.sendMail({
        from: 'vitorsouzasilvaa@hotmail.com',
        to: email,
        subject: titulo,
        html: html,
        text: msg
    })
    
    .then(() => console.log('Email enviado com sucesso'))
    .catch((error) => console.log('Error ao enviar o email', error))

}
