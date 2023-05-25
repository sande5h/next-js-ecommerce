import Layout from "@/components/layout";
import { useState } from "react";
import axios from "axios";
export default function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    createProduct();
    setTitle("");
    setDescription("");
    setPrice("");
  };
  const createProduct = async () => {
    const data = { title, description, price };
    await axios.post("/api/products", data);
  };
  return (
    <Layout>
      <form onSubmit={submitHandler}>
        <h1 className="text-center">New Product</h1>
        <label> Product Name</label>
        <input
          type="text"
          placeholder="Product_name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>
        <label>Description</label>
        <textarea
          placeholder="Description "
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></textarea>
        <label> Price (In USD)</label>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        ></input>
        <button type="submit" className="btn_primary">
          Save
        </button>
      </form>
    </Layout>
  );
}
