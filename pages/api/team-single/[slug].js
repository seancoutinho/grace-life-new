import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { slug } = req.query;
    const { name, email, message, sendToEmail } = req.body;

    console.log(name, email, message, sendToEmail);

    const mailOptions = {
        from: process.env.SEND_FROM_EMAIL,
        to: sendToEmail,
        subject: 'New Message from Gracelife Website',
        text: `Name: ${name}\nEmail: ${email}\n\n\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message || 'No error details available' });
    }
};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
