const sgMail = require("@sendgrid/mail");
const sendgridAPIKey =
  "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";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: "mitaldholakiya1996@gmail.com",
//   from: "mital1996dholakiya@gmail.com",
//   subject: "This is my first creation!!",
//   text: "I hope this one actually get to you.",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mital1996dholakiya@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelationMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mital1996dholakiya@gmail.com",
    subject: "Sorry to see you go!",
    text: `GoodBye,${name}. I hope to see you sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationMail,
};
