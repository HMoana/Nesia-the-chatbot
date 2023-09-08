const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const ChatbotRoutes = require('./Routes/ChatbotRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(ChatbotRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running on Port ${port}`));

module.exports = app;
