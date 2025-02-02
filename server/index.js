const express = require("express");
const axios = require("axios")
const app = express();

const transactionRoute = require("./routes/TransactionRoute") 

const database = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;
//database connect
database.connect();
//middlewares
app.use(express.json());

app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.use("/api", transactionRoute); 

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

app.get('/fetch-data', async (req, res) => {
  try {
    const response = await axios.get(process.env.THIRD_PARTY_API_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});