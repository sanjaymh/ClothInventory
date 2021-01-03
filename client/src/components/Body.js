import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchFeature from "./SearchFeature";
import ClothCollectionPage from "../Pages/ClothCollectionPage";


const Body = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [ cloths, setCloths ] = useState([]);

    //Making an axios post request to get all the cloth details available...
    const getClothCollection = (variables) => { 
        axios.post("/", variables)
        .then(data => {
            setCloths(data.data.clothes);
            // console.log(data.data.clothes)
            }).catch(err => console.log(err));
    }
    
    useEffect(() => {
        getClothCollection()
    }, [])    

   //Getting search term from SearchFeature
    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
        const variables = {
            searchTerm: newSearchTerm 
        }
        getClothCollection(variables)
        // console.log(newSearchTerm);
    }

    return (
        <div className="container">
            <SearchFeature refreshFunction={updateSearchTerm} />
            <ClothCollectionPage cloths={cloths} />
        </div>
    )
}

export default Body;