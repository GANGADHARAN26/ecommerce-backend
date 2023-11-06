const express =require('express');
const dbConnection = require('./config/dbConnect');
const app = express();
const dotenv=require('dotenv').config()
const authRouter=require('./routes/authRoute');
const productRouter=require('./routes/productRoute');
const blogRouter=require('./routes/blogRoute');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT=process.env.PORT || 5050;
const morgan = require('morgan');
dbConnection();
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use("/api/user",authRouter);
app.use("/api/product",productRouter)
app.use("/api/blog",blogRouter);
app.use(notFound)
app.use(errorHandler) 

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}}`);  
})
  