import { img_webpage } from "../utils/constants";

const RestaurantCard = (props) => {

    const {RestaurantData} = props
    const {cloudinaryImageId, name, cuisines, avgRating} = RestaurantData?.info
    const {deliveryTime} = RestaurantData?.info?.sla
    
    return ( 
    
    <div className="restaurant-card m-4 p-3 w-[200px] bg-slate-300">
            <img src = {img_webpage + cloudinaryImageId}
                className="restaurant-image rounded-xl" />
        <h3 className="restaurant-name font-bold py-3">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} mins</h4>
        {/* {console.log(RestaurantData)} */}
    </div>
    )
};


export default RestaurantCard ;