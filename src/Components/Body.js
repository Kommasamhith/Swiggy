import Cards from "./Cards";
import RestoCards  from "./RestoCards";
import { swiggyApi } from "./utils";
import { useEffect,useState } from "react";
import Online from "./Online";




const Body = ( ) =>{

    const [data,setData] = useState([])
    const [card,setCards] = useState([])

 const fetchData = async ( ) => {
    const res = await fetch (swiggyApi);
    const data = await res.json( );
    const info = data?.data?.cards[0]?.card?.card.gridElements?.infoWithStyle?.info;
    // console.log(info)
    const restaurants = data?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurants)
    setCards(restaurants)
setData(info)
 }

 useEffect(( ) => {
    fetchData()
 },[ ])
   
    return(
        <div classname="Body">
            <div className="Search"><div>

                <h1 className="heading">What's on your mind?</h1>
                {/* <input  className="search-bar" type="search"></input>
                <button className="btn" >Search</button> */}
                </div></div>
                <div className="cards-cointainer" >
                {data.map((item) => (
          <Cards key={item.id} resData={item} />
        ))}
                   
                </div>
                <div>
                <h1 className="restaurantNames">Top restaurant chains in Bangalore</h1>
                </div>
                
            <div className="Resto-container">
                
        
            {card.map((items) => (
          <RestoCards key={items.id} resData={items} />
        ))}
       

                
                </div>

                <div>
                    <div className="oText">
            <h1 >Restauratns with online food delivery </h1>
                    </div>
                   
                    <div className="online-container">
                        <Online />
                    </div>
                </div>
   
        </div>
    )
}

export default Body;