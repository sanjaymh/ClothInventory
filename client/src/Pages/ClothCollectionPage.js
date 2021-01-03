import React from "react";

import ClothCollection from "../components/ClothCollection";

const ClothCollectionPage = ({cloths}) => {

   return(
       <div>
        {
                cloths.length > 0 ? (<ClothCollection cloths={cloths} />) :
                <h2>No Cloths found</h2>     
        }
       </div>       
   )
}

export default ClothCollectionPage;