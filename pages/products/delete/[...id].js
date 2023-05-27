import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import axios from "axios";

export default function  DeleteProductPage() {
    const router = useRouter();
    const [productInfo, setProductInfo] = useState(null)
    const {id} = router.query;
 
        useEffect(() => {
            if (!id) {
                return ;
            }
            axios.get('/api/products?id=' + id).then(response => {
                setProductInfo(response.data);
            })
        }, [id])
    
    
    const getBack=()=>{
        router.push('/product')
    }

    const  deleteProduct =async()=>{
       await axios.delete('/api/products?id='+id)
       getBack();
    }
    return <Layout>
        <h1 className="text-center">WANT TO DELETE &quot;{productInfo?.title}&quot;?</h1>
        <div className="flex gap-2 justify-center">
        <button className="btn-red " onClick={deleteProduct}>Yes</button>
        <button className="btn-default"onClick={getBack}>No</button>
        </div>
        

    </Layout>
}