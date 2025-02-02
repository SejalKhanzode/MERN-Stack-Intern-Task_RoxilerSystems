const Transaction = require("../models/ProductTransaction");
const axios = require("axios");

exports.initDatabase = async(req,res,next)=>{
    try {
        const response = await axios.get(process.env.THIRD_PARTY_API_URL);
        await Transaction.insertMany(response.data);
        res.status(200).send('Database initialized with seed data');
    } catch (error) {
        res.status(500).send(error.message);
    }
}