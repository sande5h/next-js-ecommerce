
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice
}) {
  const [title, setTitle] = useState(existingTitle || '');
  const [description, setDescription] = useState(existingDescription || '');
  const [price, setPrice] = useState(existingPrice || '');
  const [goToProducts, setGoToProducts] = useState('false')
 

  const router = useRouter();
  const submitHandler = (event) => {
    event.preventDefault();
    saveProduct();
    setTitle("");
    setDescription("");
    setPrice("");
  };
  const saveProduct = async () => {
    const data = { title, description, price };
    if (_id) {
      await axios.put('/api/products', { ...data, _id })

    }
    else {
      await axios.post("/api/products", data);

    }
    setGoToProducts(true);



    if (goToProducts) {
      return router.push('/product');
    }

  };
  return (

    <form onSubmit={submitHandler}>
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
  );
}
