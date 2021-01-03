import React, { useState } from "react";
import axios from "axios";


const AddCloth = ({ history }) => {

    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [fabric, setFabric] = useState("");
    const [price, setPrice] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [dateOfManufacture, setDateOfManufacturer] = useState("");

    const handleOnSubmit = () => {
        axios.post("/add-cloth", {
            name, model, fabric, price, manufacturer, dateOfManufacture
        }).then(res => {console.log(res);
           })
        .catch(err => console.log(err));
        history.push("/");   
    }
    
    return(
    <React.Fragment>
    <div className="container" style={{margin: "1.2rem auto"}}>
    <div className="row">
        <div className="col">
            <h2>Add Cloth</h2>
        </div>
    </div>
    <div className="row align-items-center mt-4">
        <div className="col-9">
            <form noValidate onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input noValidate id="name"
                        autoComplete="off"
                        type="text"
                        placeholder="Name"
                        name="name1"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`form-control`} />
                    <p className="invalid-feedback">Required</p>
                </div>

                <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input noValidate id="model"
                        autoComplete="off"
                        type="text"
                        placeholder="Model"
                        name="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className={`form-control`} />
                    <p className="invalid-feedback">Required</p>
                </div>

                <div className="form-group">
                    <label htmlFor="fabric">Fabric</label>
                    <input noValidate id="fabric"
                        autoComplete="off"
                        type="text"
                        placeholder="Model"
                        name="fabric"
                        value={fabric}
                        onChange={(e) => setFabric(e.target.value)}
                        className={`form-control`} />
                    <p className="invalid-feedback">Required</p>
                </div>

                <div className="form-group">
                    <label htmlFor="fabric">Price</label>
                    <input noValidate id="price"
                        autoComplete="off"
                        type="text"
                        placeholder="Price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className={`form-control`} />
                    <p className="invalid-feedback">Required</p>
                </div>

                <div className="form-group">
                    <label htmlFor="fabric">Manufacturer</label>
                    <input noValidate id="manufacturer"
                        autoComplete="off"
                        type="text"
                        placeholder="Price"
                        name="manufacturer"
                        value={manufacturer}
                        onChange={(e) => setManufacturer(e.target.value)}
                        className={`form-control`} />
                    <p className="invalid-feedback">Required</p>
                </div>

                <div className="form-group">
                    <label htmlFor="fabric">Date of Manufacture</label>
                    <input noValidate id="dateOfManufacture"
                        autoComplete="off"
                        type="date"
                        placeholder="Price"
                        name="dateOfManufacture"
                        value={dateOfManufacture}
                        onChange={(e) => setDateOfManufacturer(e.target.value)}
                        className={`form-control`} />
                    <p className="invalid-feedback">Required</p>
                </div>

                <div className="mt-5">
                    <button type="submit" className="btn btn-primary mr-2 btn-lg">
                        Save | <i className="fas fa-save"></i>
                    </button>
                    <button type="button"
                        onClick={() => history.replace("/add-cloth")}
                        className="btn btn-secondary btn-lg">
                        Cancel | <i className="fas fa-times"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>
    
</React.Fragment>
    )
}

export default AddCloth;