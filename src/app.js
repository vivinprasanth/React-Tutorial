
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



const AppLayout = () => {
    return (
        <div className="app">
            {/* //Header */}
            <Header />  
            {/* Body */}
            <Body />
            {/* Footer */}
            
        </div>

    )
}; 


const root = ReactDOM.createRoot(document.getElementById("divisionid"));

root.render(<AppLayout />) ;






// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const restaurantList = [
//     {
//         "info": {
//           "id": "42149",
//           "name": "Asha Sweet Center - Since 1951",
//           "cloudinaryImageId": "zkqpwids2gbvhyufilja",
//           "locality": "Binnamangala",
//           "areaName": "Indiranagar",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "Sweets",
//             "Snacks",
//             "Fast Food",
//             "Bakery",
//             "Beverages",
//             "Chaat",
//             "Thalis",
//             "North Indian",
//             "Chinese"
//           ],
//           "avgRating": 4.6,
//           "veg": true,
//           "parentId": "472555",
//           "avgRatingString": "4.6",
//           "totalRatingsString": "10K+",
//           "sla": {
//             "deliveryTime": 27,
//             "lastMileTravel": 3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "3.0 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-08-18 21:55:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                 "description": "pureveg"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "pureveg",
//                       "imageId": "v1695133679/badges/Pure_Veg111.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹9"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         }
//     },
//     {
//         "info": {
//         "id": "711748",
//         "name": "Salad Days",
//         "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
//         "locality": "Sarvagna Nagar",
//         "areaName": "Indiranagar",
//         "costForTwo": "₹500 for two",
//         "cuisines": [
//           "Salads",
//           "Healthy Food",
//           "Beverages"
//         ],
//         "avgRating": 4.6,
//         "parentId": "796",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 2.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "2.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-19 03:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "brand",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "40% OFF",
//           "subHeader": "UPTO ₹80"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         }
//     },
//     {
//         "info": {
//           "id": "50840",
//           "name": "Third Wave Coffee",
//           "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
//           "locality": "Indiranagar",
//           "areaName": "Indiranagar",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Beverages",
//             "Bakery",
//             "Continental"
//           ],
//           "avgRating": 4.6,
//           "parentId": "274773",
//           "avgRatingString": "4.6",
//           "totalRatingsString": "5K+",
//           "sla": {
//             "deliveryTime": 31,
//             "lastMileTravel": 3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "30-35 mins",
//             "lastMileTravelString": "3.0 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-08-19 01:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "Delivery!",
//                       "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹179"
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "4.4",
//               "ratingCount": "1K+"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         }
//     },
//     {
//         "info": {
//           "id": "413481",
//           "name": "Chinese Wok",
//           "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//           "locality": "HAL 2nd Stage",
//           "areaName": "Indiranagar",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "Chinese",
//             "Asian",
//             "Tibetan",
//             "Desserts"
//           ],
//           "avgRating": 4.1,
//           "parentId": "61955",
//           "avgRatingString": "4.1",
//           "totalRatingsString": "1K+",
//           "sla": {
//             "deliveryTime": 38,
//             "lastMileTravel": 3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "35-40 mins",
//             "lastMileTravelString": "3.0 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-08-19 02:00:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹199"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "3.5",
//               "ratingCount": "100+"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-4d577b4d-e151-49bd-a096-3da831732c42"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/chinese-wok-hal-2nd-stage-indiranagar-bangalore-413481",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "678080",
//           "name": "ITC Aashirvaad Soul Creations",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/3/3c8d765a-c638-45d4-9121-d10e6cc5fac4_678080.JPG",
//           "locality": "Kalyan Nagar",
//           "areaName": "Dodda Banaswadi",
//           "costForTwo": "₹500 for two",
//           "cuisines": [
//             "Indian",
//             "Home Food",
//             "Healthy Food"
//           ],
//           "avgRating": 4.5,
//           "veg": true,
//           "parentId": "346141",
//           "avgRatingString": "4.5",
//           "totalRatingsString": "1K+",
//           "sla": {
//             "deliveryTime": 30,
//             "lastMileTravel": 4,
//             "serviceability": "SERVICEABLE",
//             "slaString": "30-35 mins",
//             "lastMileTravelString": "4.0 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-08-19 01:00:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                 "description": "pureveg"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "pureveg",
//                       "imageId": "v1695133679/badges/Pure_Veg111.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹179"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-4d577b4d-e151-49bd-a096-3da831732c42"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/itc-aashirvaad-soul-creations-kalyan-nagar-dodda-banaswadi-bangalore-678080",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "76669",
//           "name": "Five Star Chicken",
//           "cloudinaryImageId": "xlqfg56ash6uqqbbapvg",
//           "locality": "Old Madras Road",
//           "areaName": "Old Madras Road",
//           "costForTwo": "₹150 for two",
//           "cuisines": [
//             "Thai"
//           ],
//           "avgRating": 4.4,
//           "parentId": "376",
//           "avgRatingString": "4.4",
//           "totalRatingsString": "1K+",
//           "sla": {
//             "deliveryTime": 33,
//             "lastMileTravel": 3.6,
//             "serviceability": "SERVICEABLE",
//             "slaString": "30-35 mins",
//             "lastMileTravelString": "3.6 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-08-18 23:00:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "10% OFF",
//             "subHeader": "UPTO ₹40"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "3.7",
//               "ratingCount": "100+"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-4d577b4d-e151-49bd-a096-3da831732c42"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/five-star-chicken-old-madras-road-bangalore-76669",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "842402",
//           "name": "Aasife Biriyani",
//           "cloudinaryImageId": "da2592e0d25f079cbf9aedf436cabf6f",
//           "locality": "Koramangala",
//           "areaName": "Kammanahalli/Kalyan Nagar",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Biryani"
//           ],
//           "avgRating": 4,
//           "parentId": "1265",
//           "avgRatingString": "4.0",
//           "totalRatingsString": "100+",
//           "sla": {
//             "deliveryTime": 26,
//             "lastMileTravel": 2.6,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "2.6 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-08-18 23:00:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "aggregatedDiscountInfoV2": {
            
//           },
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "isNewlyOnboarded": true,
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "4.4",
//               "ratingCount": "100+"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-4d577b4d-e151-49bd-a096-3da831732c42"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/aasife-biriyani-koramangala-kammanahalli-kalyan-nagar-bangalore-842402",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "32603",
//           "name": "Leon's - Burgers & Wings (Leon Grill)",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_32603.jpg",
//           "locality": "Indiranagar",
//           "areaName": "Indiranagar",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "American",
//             "Snacks",
//             "Turkish",
//             "Portuguese",
//             "Continental"
//           ],
//           "avgRating": 4.5,
//           "parentId": "371281",
//           "avgRatingString": "4.5",
//           "totalRatingsString": "10K+",
//           "sla": {
//             "deliveryTime": 23,
//             "lastMileTravel": 3.5,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20-25 mins",
//             "lastMileTravelString": "3.5 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-08-19 04:00:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "₹125 OFF",
//             "subHeader": "ABOVE ₹249",
//             "discountTag": "FLAT DEAL"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "4.5",
//               "ratingCount": "1K+"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-4d577b4d-e151-49bd-a096-3da831732c42"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-indiranagar-bangalore-32603",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "285175",
//           "name": "Thalairaj Biryani",
//           "cloudinaryImageId": "g5sfrpdo2x8pjhpk36xm",
//           "locality": "2nd stage",
//           "areaName": "Indiranagar",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "Andhra",
//             "Biryani",
//             "Hyderabadi",
//             "South Indian",
//             "Indian",
//             "Kebabs",
//             "Snacks",
//             "Beverages"
//           ],
//           "avgRating": 4.3,
//           "parentId": "433875",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "5K+",
//           "sla": {
//             "deliveryTime": 26,
//             "lastMileTravel": 4.5,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "4.5 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-08-19 03:00:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "50% OFF",
//             "subHeader": "UPTO ₹100"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {
//           "context": "seo-data-4d577b4d-e151-49bd-a096-3da831732c42"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/thalairaj-biryani-2nd-stage-indiranagar-bangalore-285175",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     }

// ];


// const RestaurantCard = (props) => {

//     const {RestaurantData} = props
//     const {cloudinaryImageId, name, cuisines, avgRating} = RestaurantData?.info
//     const {deliveryTime} = RestaurantData?.info?.sla
    
//     return (
//     <div className="restuarant-card">
//             <img src = {
//                 "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
//                     cloudinaryImageId }
//                 className="restuarant-image" />
//         <h3 className="restuarant-name">{name}</h3>
//         <h4>{cuisines.join(", ")}</h4>
//         <h4>{avgRating} stars</h4>
//         <h4>{deliveryTime} mins</h4>
//         {/* {console.log(ResData)} */}
//     </div>
//     )
// };


// const Body = () => {
//     return (
//         <div className="body-container">
//             <input className="search-bar" placeholder="search"></input>
//             <div className="restuarant-container">      
//                 {
//                     restaurantList.map((restaurant) => (
//                     <RestaurantCard key = {restaurant.info.id} RestaurantData = {restaurant} /> 
//                 ))
//                 }
//             </div>
//         </div>
        
//     )    
// };

// const AppLayout = () => {
//     return (
//         <div className="app">
//             {/* //Header */}
//             <Header />  
//             {/* Body */}
//             <Body />
//             {/* Footer */}
            
//         </div>
//     )
// }; 


// const root = ReactDOM.createRoot(document.getElementById("divisionid"));

// root.render(<AppLayout />) ;