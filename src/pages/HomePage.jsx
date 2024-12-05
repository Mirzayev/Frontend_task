import Banner from "../components/Banner.jsx";
import PopularProduct from "../components/PopularProduct.jsx";
import Creative from "../components/Creative.jsx";
import PlaceOrder from "../components/PlaceOrder.jsx";
import IdeaMerchandise from "../components/IdeaMerchandise.jsx";
import Partners from "../components/Partners.jsx";


export default  function HomePage(){

    return(
        <div>
            <Banner/>
            <PopularProduct/>
            <Creative/>
            <PlaceOrder/>
            <IdeaMerchandise/>
            <Partners/>
        </div>
    )
}