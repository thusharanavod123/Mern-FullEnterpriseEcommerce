const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieparser = require('cookie-parser');


//creATE DATABSE connection

mongoose.connect('mongodb+srv://brnavod:9rkjHMLC255xuZ5l@cluster-ecommerce.7vto9dq.mongodb.net').then(() => {console.log('Connected to MongoDB')}).catch((erro) => {console.log("mpongoDB connection error", erro)}); 


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors
    ({ origin : 'http://localhost:5173',
        methods : ['GET', 'POST', 'PUT', 'DELETE'],
        credentials : true,
        allowedHeaders : ['Content-Type', 'Authorization' , 'cache-control',  'pragma ','Expires', 'Set-Cookie', 'Cookie'],credentials : true
     }));
app.use(cookieparser());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})