const path = require("path");
const router = require("express").Router();
const apparelRoutes = require("../merch");
const homeGardenRoutes = require("../homeGarden");
const jewelryRoutes = require("../jewelry");

// API Routes
router.use("/merch", apparelRoutes);
router.use("/homegardenproducts", homeGardenRoutes);
router.use("/jewelry", jewelryRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;
