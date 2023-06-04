 import React from "react";
 import reactDom from "react-dom/client";
 
 /**
  * Header
  * - Logo
  * - Nav Items
  * Body
  * - Search
  * -Restaurant Container
  *   -Restaurant Card
  *     -img
  *     -Nmae of Res,star Rating,Cuisine,Delivery time
  * Footer
  * -CopyRight
  * -Links
  * -Address
  * -Contact
  */
//Inline style basically we make as a javascript object and pass it inside the {}.
 const styleCard = {
  backgroundColor:"#f0f0f0",
 };

 const Header = ()=>{
  return(
  <div className="header">
    <div className="logo-container">
      <img className="logo" src="https://static.vecteezy.com/system/resources/previews/005/927/704/original/hamburger-classic-burger-american-cheeseburger-with-lettuce-tomato-onion-cheese-beef-and-sauce-close-up-isolated-on-white-background-fast-food-illustration-vector.jpg"/>
    </div>
    <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
    </ul>
    </div>
  </div>
  )
 };

 const RestaurantCard = (props)=>{
  const {restData} = props; //Destructuring
  const {cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating
  } = restData?.data; //optional chaining and Destructuring
  return(
    <div className="res-card" style={styleCard}>
    <img className="res-logo" 
    // different cloudinary image id for different restaurant
    src={
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" 
      + cloudinaryImageId
    }
    alt="res-logo"/>
    <h3>{name}</h3>
    <h4>{cuisines.join(',')}</h4>
    <h4>₹{costForTwo/100} FOR TWO</h4>
    <h4>{deliveryTime}minutes</h4>
    <h4>{avgRating}stars</h4>
    </div>
  );
 };

 const resList=[{
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "41005",
      "name": "Sri Raghavendra Tiffins",
      "uuid": "88a71b89-dc82-4f2f-88ff-eb4082177945",
      "city": "3",
      "area": "Kachiguda",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "chpzykzkkvdadynupvvi",
      "cuisines": [
        "South Indian",
        "Andhra"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 3.5,
      "slugs": {
        "restaurant": "sri-raghavendra-tiffins-barkathpura-himayath-nagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "H.No 3-4-1005/2/1, Indhrani Complex, Barkathpura, Hyderabad",
      "locality": "Barkathpura",
      "parentId": 8196,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6980187~p=1~eid=00000188-7bbc-a0ee-0972-dce900460103",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "41005",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 3.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "4320",
      "name": "Mehfil",
      "uuid": "4dee4970-8673-42b6-8a49-cab0efdb258f",
      "city": "3",
      "area": "Narayanguda",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "esp0fhddgfgdss5hyhpi",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Tandoor",
        "Chinese",
        "Kebabs"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 2.5999999046325684,
      "slugs": {
        "restaurant": "mehfil-narayanguda-himayath-nagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "Near Narayanguda Flyover, Narayanguda, Hyderabad",
      "locality": "Near Narayanguda Flyover",
      "parentId": 637,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "4320",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "4650",
      "name": "Bawarchi",
      "uuid": "4e784916-87ff-4951-9c21-2f0c1df1fb31",
      "city": "3",
      "area": "New Nallakunta",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "smfhai0o8rnjuzp3ngxu",
      "cuisines": [
        "Biryani",
        "Tandoor",
        "Chinese",
        "Indian",
        "Desserts",
        "Kebabs",
        "Mughlai"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 2.5999999046325684,
      "slugs": {
        "restaurant": "bawarchi-nallakunta-vidyanagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "Beside Astoria Hotel, RTC Cross Road, Chikkadpally, Nallakunta, Hyderabad",
      "locality": "New Nallakunta",
      "parentId": 100,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "4650",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "10069",
      "name": "Shree Santosh Family Dhaba",
      "uuid": "14cbe2ef-40fa-415f-9f75-3890b98dfee9",
      "city": "3",
      "area": "Narayanguda",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "pro9wrdscz7nd8ezzrwg",
      "cuisines": [
        "Punjabi",
        "North Indian",
        "Chinese",
        "Tandoor"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 2.799999952316284,
      "slugs": {
        "restaurant": "shree-santosh-family-dhaba-old-mla-quarters-road-himayath-nagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "3-5-890, Paras Chambers, Telugu Academy Lane,Himayath Nagar, Hyderabad",
      "locality": "Old MLA Quarters Road",
      "parentId": 3003,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6939984~p=4~eid=00000188-7bbc-a0ee-0972-dcea00460423",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "10069",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2.799999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "131870",
      "name": "4M Biryani House",
      "uuid": "3b8256f4-4e99-4cdf-8b9e-9dbd267af08a",
      "city": "3",
      "area": "Musheerabad",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "o685uklvqias8ez1qgxz",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 1.7000000476837158,
      "slugs": {
        "restaurant": "4m-biryani-house-musheerabad-nallakunta-vidyanagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "Opposite Humera Hotel, Badi Masjid, Bholakpur, Musheerabad, Hyderabad",
      "locality": "",
      "parentId": 19646,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "131870",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "4138",
      "name": "Grand Hotel",
      "uuid": "c1a1d888-51b7-4bcc-b539-f884c796a015",
      "city": "3",
      "area": "Koti",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "g1arzw6qd7g9affkmgzk",
      "cuisines": [
        "Biryani",
        "Chinese",
        "Tandoor",
        "Haleem"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 4.800000190734863,
      "slugs": {
        "restaurant": "grand-hotel-abids-himayath-nagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "Opposite Big Bazaar, 4-1-395,Abids Road, Hyderabad",
      "locality": "Abids Road",
      "parentId": 4001,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "4138",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 4.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "112997",
      "name": "KFC",
      "uuid": "e619a1ac-421a-47f9-a855-d3e1104cad53",
      "city": "3",
      "area": "Imax Hyderabad",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "kfc-imax-rd-somajiguda-khairtabad",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "KFC Resturants,IMAX RD, LIC DIVISION,NTR GARDENS,HYDERABAD TELANGANA 500004",
      "locality": "NTR Gardens",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7020762~p=7~eid=00000188-7bbc-a0ee-0972-dceb00460779",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "112997",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "531692",
      "name": "Haldiram's Restaurant",
      "uuid": "c4c67253-ac67-49a7-97ee-f6c15567ef3e",
      "city": "3",
      "area": "Nallakunta & Vidyanagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "c058b951bd917bf716630dff74648a5d",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Sweets",
        "Desserts",
        "Chaat"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 2.200000047683716,
      "slugs": {
        "restaurant": "haldiram-nallakunta-&-vidyanagar-nallakunta-&-vidyanagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "Survey No.33to39&85/1, Plot No.1, Block No.6, Third floor, Praga mall, Kavadiguda, Secundrabad, Hyderabad, Telangana 500080",
      "locality": "Praga Mall",
      "parentId": 351771,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "531692",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2.200000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
}];

//not using keys(not acceptable)<<<<<<<<<< index as key <<<<<<<<<< unique id(Best Practice)

 const Body = ()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* Restaurant card Component */}
        { /** whenevr looping on to anythig by using a map reduce or filter...always pass key */ }
        
        {
          resList.map((restaurant) => ( <RestaurantCard key={restaurant.data.id} restData={restaurant}/>))
        }
        
      </div>

    </div>
  )
 }
 const AppLayout = ()=>{
  return(
    <div className="App">
    <Header/>
    <Body/>
    

  </div>

  ) 
 }



const root = reactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
