
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images,
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

  }

  const uploadImages =async(ev) => {

    const files = ev.target?.files;
      console.log(files);

      if(files?.length>0){
        const data = new FormData();
        for (const file of files)
       {
          data.append('file',file)
        };
          console.log(data)
        const res = await axios.post('/api/upload', data, {headers:{'Content-Type': 'multipart/form-data'}});

        console.log(res.data);
      }

  }
  return (

    <form onSubmit={submitHandler}>
      <label> Product Name</label>
      <input
        type="text"
        placeholder="Product_name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      ></input>
      <label>Photos</label>
      <div className="mb-2">
        <label className="w-24 h-24  text-center flex flex-col gap-1  rounded-lg bg-gray-300 text-gray-500 text-sm items-center justify-center cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex items-center">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
          </svg>
          <div>
            Upload
          </div>
          <input type="file" className=""  onChange={uploadImages}></input>

        </label>

        {!images?.length && (
          <div> No Photos in this Product</div>
        )}
      </div>

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
