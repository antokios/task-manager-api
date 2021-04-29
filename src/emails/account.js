const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kiosses@softweb.gr',
        subject: 'Thanks for joining in!',
        text: `Welcome to Task Manager, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kiosses@softweb.gr',
        subject: 'Sorry to see you go!',
        text: `Good bye, ${name}. Help us improve ourselves by letting us know if there's anything we could have done to have kept you on board.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}