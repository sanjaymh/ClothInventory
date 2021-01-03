import React from "react";

const ClothCollection = ({ cloths }) => {

return(
        <React.Fragment>
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Model</th>
                    <th scope="col">Fabric</th>
                    <th scope="col">Price</th>
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Manufacturing Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    cloths.map(cloth => (                        
                        <tr key={cloth._id}>
                            <td> 
                                {cloth.name}
                            </td>
                            <td>
                                {cloth.model}    
                            </td>
                            <td>
                                {cloth.fabric}    
                            </td>
                            <td>
                                {cloth.price}    
                            </td>
                            <td>{cloth.manufacturer}</td>
                            <td>{cloth.dateOfManufacture}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </React.Fragment> 
    )
}

export default ClothCollection;