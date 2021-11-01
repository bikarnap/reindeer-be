const express = require('express');
const app = express(); 

const PORT = process.env.PORT || 8000;

const foodData = [
    {
      id: "1",
      item: "item01",
      ingredient: "potatos,cocumber",
      available: true,
      country: "Finland",
      discount: "FI",
      image: "Pic1",
      foodChoices: ["Non-Veg"],
    },
    {
      id: "2",
      item: "item02",
      ingredient: "garlic,Lamb,salad",
  
      available: true,
      country: "Finland",
      discount: "FI",
      image: "Pic2",
  
      foodChoices: ["Non-Veg"],
    },
    {
      id: "3",
      item: "item03",
      ingredient: "garlic, salad, Chilli ",
      available: true,
      country: "Finland",
      discount: "FI",
      image: "Pic3",
      foodChoices: ["Veg"],
    },
    {
      id: "4",
      item: "item04",
      ingredient: "garlic, salad, Chicken, Chilli",
      available: true,
      country: "Finland",
      discount: "FI",
      image: "Pic4",
      foodChoices: ["Lacto Veg"],
    },
    {
      id: "5",
      item: "item05",
      ingredient: "garlic, salad, Chicken,Chilli",
      available: true,
      country: "Finland",
      discount: "FI",
      image: "Pic5",
      foodChoices: ["Non-Veg"],
    },
    {
      id: "6",
      item: "item06",
      ingredient: "garlic, salad, Chicken, Chilli",
      available: true,
      country: "Finland",
      discount: "FI",
      image: "Pic6",
      foodChoices: ["Lactose Free"],
    },
    {
      id: "7",
      item: "item07",
      ingredient: "garlic, salad, Chicken, Chilli",
      available: true,
      country: "Finland",
      discount: "FI",
      image: "",
      foodChoices: ["Gluton free"],
    },
    {
      id: "8",
      item: "item08",
      ingredient: "garlic, salad, Chicken, Chilli",
      available: true,
      country: "Finland",
      discount: "FI",
      image: "",
      foodChoices: ["Gluton free"],
    }
]

const getWelcomeMessage = (req, res) => {
    res.send('<em>Reindeer food service for train passengers</em>');
};

const getAllMenus = (req, res) => {
    res.json(foodData)
};

const postDepartureInfo = (req, res) => {
    const departureInfo = req.body;
    res.send(departureInfo);
};

// GET
app.get('/', getWelcomeMessage);

app.get('/api/menus', getAllMenus);

// POST
app.post('/departure', postDepartureInfo);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})