const { Router, urlencoded } = require("express");
const mainController = require("../controllers/main-controller");
const homeValidation = require("../validation/home-validation");
const router = Router();


const encodedUrl = 
  urlencoded({
    extended: true,
  });

router.get("/", mainController.home);
router.post("/", encodedUrl, homeValidation, mainController.homeForm);




module.exports = router;
