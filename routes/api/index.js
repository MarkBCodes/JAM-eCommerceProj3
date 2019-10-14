const path = require("path");
const router = require("express").Router();
const merchRoutes = require("../merch");

// API Routes
router.use("/merch", merchRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
