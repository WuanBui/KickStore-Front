import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import {Product} from "@/models/Product";

export default function HomePage({product}){
  return(
    <div>
    <Header/>
    <Featured product={product}/>
    </div>
  );
}


export async function getServerSideProps(){
  const featuredProductId= "65b3be04ce7abbcf0493bc92";
  await mongooseConnect();

  const product = await Product.findById(featuredProductId);
  return{
    props: {product: JSON.parse(JSON.stringify(product))},
  };

}