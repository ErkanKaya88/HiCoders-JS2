import { fishFarm } from "./fishFarm.js";
import {
  fishNameStockOver500,
  fishNamePriceBetween9and12,
  winterSeasonFishInBern,
  fishPriceLessThan10FromAB,
  totalFishStock,
  mostExpensiveFish,
  lisTheFishAccording,
  durationFishes,
  avaragePriceOfFishesInRomandy,
  cantonOfTicino,
  avarageOfFishesWeightInZurich,
} from "./function.js";

// 1) What are the names of the fish with stocks over 500 kg?
console.log(fishNameStockOver500(fishFarm));

//2) What are the fish with a price range between 9 Fr. and 12 Fr.?
console.log(fishNamePriceBetween9and12(fishFarm));

//3) Which fish are sold only in Bern and only in the winter season?
console.log(winterSeasonFishInBern(fishFarm));

//4) List in alphabetical order the fish from the European Union (EU) that cost less than 10Fr.
console.log(fishPriceLessThan10FromAB(fishFarm));

//5) What is the total fish stock?
console.log(totalFishStock(fishFarm));

//6) List the fish according to their expiration date (fish with an approaching expiration date should be listed first).
console.log(lisTheFishAccording(fishFarm));
//7) Which fish is the most expensive?
console.log(mostExpensiveFish(fishFarm));

//8) From which country do the fish that can stand for the longest time come from?
console.log(durationFishes(fishFarm));

//9) What is the average price of fish sold in the Romandy for the winter and fall season?
console.log(avaragePriceOfFishesInRomandy(fishFarm));

//10) How many fish are in stock for the Canton of Ticino?
console.log(cantonOfTicino(fishFarm));

//11) Find the average weight of fish from the summer season, from outside the EU and sold in ZH?
console.log(avarageOfFishesWeightInZurich(fishFarm));
