import { img_webpage } from "../utils/constants";

const RestaurantCard = (props) => {

    const {RestaurantData} = props
    const {cloudinaryImageId, name, cuisines, avgRating} = RestaurantData?.info
    const {deliveryTime} = RestaurantData?.info?.sla
    
    return (
    <div className="restaurant-card">
            <img src = {img_webpage + cloudinaryImageId}
                className="restaurant-image" />
        <h3 className="restaurant-name">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} mins</h4>
        {/* {console.log(RestaurantData)} */}
    </div>
    )
};


export default RestaurantCard ;