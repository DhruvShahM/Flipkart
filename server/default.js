import { products } from "./constants/constant.js";
import Product from "./models/product-schema.js";

const DefaultData=()=>{
    try {
        Product.insertMany(products);
        console.log('Data imported successfully');
    } catch (error) {
        console.log('Error while inserting the default data',error.message);
    }
}

export default DefaultData;