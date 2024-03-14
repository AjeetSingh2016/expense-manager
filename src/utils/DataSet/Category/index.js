// Import each dictionary from different files
const FoodAndGroceries = require("./Food&Grocery");
const ECommerce = require('./ECommerce');
const FuelAndGas = require('./Fuel&Petrol');
const Healthcare = require('./HealthCare');
const Entertainment = require('./Entertainment');
const TravelsAndHotels = require('./Travel&Hotels');
const HousingAndBills = require('./HousingAndBills');

// Combine all dictionaries into one
export const dictionaries = [
  { name: 'FoodAndGroceries', words: FoodAndGroceries },
  { name: 'ECommerce', words: ECommerce },
  { name: 'FuelAndGas', words: FuelAndGas },
  { name: 'Healthcare', words: Healthcare },
  { name: 'Entertainment', words: Entertainment },
  { name: 'TravelsAndHotels', words: TravelsAndHotels },
  { name: 'HousingAndBills', words: HousingAndBills }
];