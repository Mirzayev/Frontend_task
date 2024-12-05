import ProductPage from "./components/Products.jsx";
import IdeaMerchandise from "../../components/IdeaMerchandise.jsx";
import Banner from "../seam/components/Banner.jsx";


export default function AllProduct(){

    return(
        <div>
            <Banner/>
          <ProductPage/>
            <IdeaMerchandise/>
        </div>
    )
}