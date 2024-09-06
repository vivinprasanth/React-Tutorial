import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// this hook is used for getting the 



const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const  {resId} = useParams();
    console.log(resId);
    // const params = useParams();             
    // console.log(params);

    

    useEffect(() => {
        fetchMenu(); 
    }, []);

    fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);


    };
    if (resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage, } = resInfo.cards[2]?.card?.card?.info ; 
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    
    console.log('resInfo.cards', resInfo.cards);
    console.log('itemCards', itemCards);
    
    

  
    return (
        <div className="Menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map(item => <li key = {item.card.info.id}> {item.card.info.name} - {item.card.info.price/100} </li>)}
                
                

                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>{itemCards[3].card.info.name}</li> */}
                
                {/* each item is mapped using map functions */}

            </ul>
            

        </div>

    );
};

export default RestaurantMenu;

