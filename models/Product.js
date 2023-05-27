
import { model , Schema, models} from "mongoose";

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
