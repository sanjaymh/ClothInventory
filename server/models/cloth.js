const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    model: {
        type:String
    },
    fabric: {
        type: String
    },
    price: {
        type: String
    },
    manufacturer: {
        type: String
    },
    dateOfManufacture: {
        type:Date,
        default: Date.now()
    }
})

clothSchema.index({
    name: "text"
})

module.exports = mongoose.model("Cloth", clothSchema);