const express = require('express')
const router = express.Router();
const {initDatabase} = require("../controllers/Initiate.js");
const  {transactions} = require("../controllers/Transaction.js");
const  { statistics } = require("../controllers/Statistics.js");
const  { barChartData } = require("../controllers/BarChart.js");
const  { pieChartData } = require("../controllers/PieChart.js");
const  { combinedData } = require("../controllers/CombineData.js")



router.get("/init",initDatabase);
router.get("/transaction",transactions);
router.get("/statistics",statistics);
router.get("/barChartData",barChartData);
router.get("/pieChartData",pieChartData);
router.get("/:month",combinedData);

module.exports = router