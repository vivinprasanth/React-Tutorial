import { useEffect, useState } from "react";
// import restaurantList from "../utils/mockData";
import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    const [initialList, finalList] =  useState([]) ;

    const [filteredRestaurantList,setfilteredRestaurantList] = useState([]);

    const [searchText, setsearchText] = useState("") ;

    console.log("body rendering")


    
    
    useEffect(()=>{
        fetchData();
        // console.log("useEffect")
    },[]);


    const fetchData = async () => {

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const jsonValue = await data.json() ;

        // console.log(jsonValue);
        // console.log(jsonValue.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

        finalList(jsonValue.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optional chaining

        setfilteredRestaurantList(jsonValue.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //this is for the search filter

    };

    

    // if (initialList.length===0){    //conditional rendering
    //     return <Shimmer />;

        //  return <h1>Loading...</h1>
    // }

    return initialList.length === 0 ? (           //this is using ternary operator ? :
        <Shimmer /> ) : 
        (
        <div className="body-container">
            <div className="filter">
                <div className="search-container m-4">
                    <input type="text"  className="search-bar border border-solid border-black" placeholder="search" value={searchText} 
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                        // initially the search input does not take the value (infact value cant be typed)
                        // therefore we use this onChange event handler, (e) is event object
                        // e.target refers to the DOM element that triggered the event, in this case, the <input> field.
                        // e.target.value retrieves the current value of the input field, i.e., what the user has typed. 
                        // here searchText gets updates => new rendering happens for each letter
                        // Reconsilation
                    }} />
                    <button className="searchButton  px-4 m-2 mr-6 border border-solid rounded-xl bg-green-300" 
                        onClick={() => {
                            // console.log(searchText)
                            const filteredRestaurantList = initialList.filter((res)=>(
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            ));

                            setfilteredRestaurantList(filteredRestaurantList);  
                        }}>
                        search
                    </button>
                    <button 
                        className="filter-btn px-4 border border-solid bg-gray-500 rounded-xl" onClick = { () => {
                            filterList = initialList.filter(
                                (res) => (res.info.avgRating > 4.5)) ;
                            finalList(filterList) ; 
                        }} > Top Rated Restaurants 
                    </button>
                </div>
            </div>

            <div className="restaurant-container flex flex-wrap">      
                {
                    // initialList.map((restaurant) => (
                    // <RestaurantCard key = {restaurant.info.id} RestaurantData = {restaurant} />
                    filteredRestaurantList.map((restaurant) => (
                        <Link key = {restaurant.info.id} to = {"/city/bangalore/" + restaurant.info.id}>
                            <RestaurantCard  RestaurantData = {restaurant} />
                        </Link>
                ))
                }
            </div>
        </div>  
        
    )
    
    

};


export default Body ;