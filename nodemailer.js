import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
// config the  SMTP

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// create the email processor  - send out the email

const emailProcessor = async (templateObj) => {
  const info = await transporter.sendMail(templateObj);
  console.log(info.messageId);
  return info;
};

// functions to create template
export const userUpdateTemplate = ({ email, subject, message, name }) => {
  const obj = {
    from: `"${name}" <${email}>`,

    to: "sushildangoriya40@gmail.com",
    subject,
    text: `${name} (${email}): ${message}`,

    html: `
      <p><strong>Sender Name:</strong> ${name}</p>
      <p><strong>Sender Email:</strong> ${email}</p>
      <h4>${subject}</h4>
      <p>${message}</p>
    `,
  };
  return emailProcessor(obj);
};
