import  express from "express";
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/routes.js';
import bodyParser from "body-parser";
import cors from 'cors';
import  path from 'path';
import {v4 as uuid} from 'uuid';

const app=express();
app.use(cors());
app.options('*', cors());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
const absolute=path.resolve("./server/.env")
const result =dotenv.config({path:absolute});
if (result.error) {
  const paths=path.resolve("./.env")
  dotenv.config({path:paths})
  }

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router);

const PORT=process.env.PORT || 8000;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const URL=process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-xduuc78-shard-00-00.rle2spy.mongodb.net:27017,ac-xduuc78-shard-00-01.rle2spy.mongodb.net:27017,ac-xduuc78-shard-00-02.rle2spy.mongodb.net:27017/ecommerce-website?ssl=true&replicaSet=atlas-1nlhha-shard-0&authSource=admin&retryWrites=true&w=majority`;



Connection(URL);

if(process.env.NODE_ENV==='production'){
  // console.lof('client build running');
  app.use(express.static('client/build'));
}

app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`));
// DefaultData();


export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;
export let paytmParams={};
paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['ORDER_ID']=uuid();
paytmParams['TXN_AMOUNT']='100';
paytmParams['CALLBACK_URL']='callback';
paytmParams['EMAIL']='dhruvshahlinkedin@gmial.com';
paytmParams['MOBILE_NO']='1234567890';