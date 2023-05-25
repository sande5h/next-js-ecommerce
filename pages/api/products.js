import mongoose from "mongoose";
import clientPromise from "@/lib/mongodb";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, description, price } = req;
    await Product.create({
      title,
      description,
      price,
    });

    res.json(Product);
  }
}
