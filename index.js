const express =require('express');
const dbConnection = require('./config/dbConnect');
const app = express();
const dotenv=require('dotenv').config()
const authRouter=require('./routes/authRoute');
const productRouter=require('./routes/productRoute');
const blogRouter=require('./routes/blogRoute');
const categoryRouter=require('./routes/productcategoryRoute');
const blogcategoryRouter=require('./routes/blogCatRoute');
const brandRouter=require('./routes/brandRoute')
const colorRouter=require('./routes/colorRoute')
const uploadRouter=require('./routes/uploadRoute')
const couponRouter=require('./routes/couponRoute');
const enqRouter=require('./routes/enqRoute');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT=process.env.PORT || 5050;
const morgan = require('morgan');
const cors = require('cors');
dbConnection();
app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

app.use("/api/user",authRouter);
app.use("/api/product",productRouter)
app.use("/api/blog",blogRouter);
app.use("/api/category",categoryRouter);
app.use("/api/blogcategory",blogcategoryRouter);
app.use("/api/brand",brandRouter);
app.use("/api/color",colorRouter);
app.use("/api/enquiry",enqRouter);
app.use("/api/upload",uploadRouter);
app.use('/api/coupon',couponRouter);
app.use(notFound)
app.use(errorHandler) 

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}}`);  
})
  