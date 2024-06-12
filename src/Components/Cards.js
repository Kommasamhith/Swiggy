import { Cdn } from "./utils";

const Cards =  ({resData} ) => {
    const{imageId} = resData
   
    return(
        <div >
          <img className="items" src={Cdn + imageId} alt="items" />

        </div>
    )
}

export default Cards;