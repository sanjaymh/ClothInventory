const Cloth = require("../models/cloth");

exports.saveCloth = (req, res) => {
    const { name, model, fabric, price, manufacturer, dateOfManufacture } = req.body;
    
    //Checking if already exists...
    Cloth.findOne({name: name})
    .then(cloth => {
        if(cloth) return res.status(403).json({msg: "Cloth by name already exists"});
    //Saving new cloth details...
        const newCloth = new Cloth({
            name, model, fabric, price, manufacturer, dateOfManufacture
        });

        newCloth.save()
        .then(cloth => res.status(201).json({cloth}))
        .catch(err => res.status(500).json({err}));     
    })
}

// Fetching available cloth details...
exports.getClothes = (req, res) => {
     //Text from Search bar;
     const term = req.body.searchTerm;
     if(!term){
        Cloth.find()
        .then(clothes => {
            res.status(200).json({clothes});
        })
    }else{
        Cloth.find({$text: {$search: term}},
            {score: {$meta: "textScore"} }
            ).sort({ score: {$meta: "textScore"} })
        .then(clothes => {
            res.status(200).json({clothes});            
        }) 
    }
}
