const express = require("express");
const router = express.Router();
const clothController = require("../controllers/clothController")

router.post("/add-cloth", clothController.saveCloth );
router.post("/", clothController.getClothes);

module.exports = router;
