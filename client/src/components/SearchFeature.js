import React, { useState } from "react";

const SearchFeature = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const onChangeSearch = e => {
        setSearchTerm(e.target.value)
    
        props.refreshFunction(e.target.value)
    }
 
    return(
        <div className="search-bar" style={{display:"flex", justifyContent:"center", textAlign: "center", margin:"2.5rem auto"}}>
            <input
            style= {{margin:"auto 1.5rem"}}     
            className="form-control me-2" 
            placeholder="Search By Name"
            name="searchTerm"
            value={searchTerm}
            onChange={onChangeSearch}   
            autoComplete="off"
                     
            />
        </div>
    )
}

export default SearchFeature;