
import Product from "@/models/Product";
import mongooseConnect from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    console.log(req.body)
    const { title, description, price } = req.body;

    console.log( title, description, price )
     const product = await Product.create({
      title,
      description,
      price,
    });

    res.json(product);
  }
}
