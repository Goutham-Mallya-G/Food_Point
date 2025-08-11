const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: "http://localhost:1234"
}));

app.get("/api", async (req, res) => {
    try{
    const { data } = await axios.get(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.064762776647267&lng=77.00440496206284`,
        {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Referer': 'https://www.swiggy.com/',
      'Accept': 'application/json',
    },
  }
    ); 
    res.json(data);
}catch(error){
    console.log(error);
}   
});

app.get("/menu/:id", async (req, res) => {
    try{
    const { data } = await axios.get(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.064762776647267&lng=77.00440496206284&restaurantId=${req.params.id}`,
        {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Referer': 'https://www.swiggy.com/',
      'Accept': 'application/json',
    },
  }
    );
    console.log(data);
    res.json(data);
}catch(error){
    console.log(error);
}
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});