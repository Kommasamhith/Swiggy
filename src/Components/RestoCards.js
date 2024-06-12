import { Cdn } from "./utils";

const RestoCards = ({resData}) => {
    const{cloudinaryImageId,name,avgRating}= resData.info;
    return(
        <div className="Cards" >
            <div className="res-cards" >
                <img alt="img" className="Res-logo" src={Cdn + cloudinaryImageId} />
                    <h3>{name}</h3>
                    <p>Rating : {avgRating}</p>
                        
                        </div>                        
                    </div>

    )
}

export default RestoCards;