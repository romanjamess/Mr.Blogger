const router = require('express').Router();
const homeRoutes = require('./homeroutes');
const apiRoutes = require("./api")
const dashBoard = require("./dashboardRoutes");

router.use('/', homeRoutes);
router.use("/api", apiRoutes)
router.use("/dashboard", dashBoard)


router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
