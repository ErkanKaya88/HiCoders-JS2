import { fishFarm } from "./fishFarm.js";

// 1) What are the names of the fish with stocks over 500 kg?
const fishNameStockOver500 = (pFishes) => {
  const fishName = pFishes.filter((fish) => fish.stockVolumeInKg > 500);

  return fishName.map((fish) => fish.fishType);
};

//2) What are the fish with a price range between 9 Fr. and 12 Fr.?
const fishNamePriceBetween9and12 = (pFishes) => {
  const fishPrice = pFishes
    .filter((fish) => fish.price < 12 && fish.price > 9)
    .map((fish) => fish.fishType);
  return fishPrice;
};

//3) Which fish are sold only in Bern and only in the winter season?

const winterSeasonFishInBern = (pFishes) => {
  const fishSeason = pFishes
    .filter(
      (fish) => fish.season === "Winter" && fish.saleLocations.includes("BE")
    )
    .map((fish) => fish.fishType);
  return fishSeason;
};
//4) List in alphabetical order the fish from the European Union (EU) that cost less than 10Fr.
const fishPriceLessThan10FromAB = (pFishes) => {
  const fishPrice = pFishes
    .filter(
      (fish) =>
        (fish.originCountry === "Spain" ||
          fish.originCountry === "GREECE" ||
          fish.originCountry === "Italy" ||
          fish.originCountry === "France" ||
          fish.originCountry === "Poland") &&
        fish.price < 10
    )
    .map((fish) => fish.fishType)
    .sort();
  return fishPrice;
};

//5) What is the total fish stock?
const totalFishStock = (pFishes) => {
  return pFishes
    .map((fish) => fish.stockVolumeInKg)
    .reduce((fish1, fish2) => fish1 + fish2);
};

//6) List the fish according to their expiration date (fish with an approaching expiration date should be listed first).
const lisTheFishAccording = (pFishList) => {
  return pFishList
    .map((fish) => {
      fish.entryDate.setDate(fish.entryDate.getDate() + fish.durationInDays);
      return {
        date: new Date(fish.entryDate),
        name: fish.fishType,
        price: fish.price,
      };
    })
    .sort((fish, fish1) => fish.date.getTime() - fish1.date.getTime());
};

//7) Which fish is the most expensive?
const mostExpensiveFish = (pFishes) => {
  const expensiveFish = pFishes
    .map((fish) => fish.price)
    .sort((fish1, fish2) => fish2 - fish1)[0];
  return pFishes
    .filter((fish) => fish.price === expensiveFish)
    .map((fish) => fish.fishType)
    .toString();
};

//8) From which country do the fish that can stand for the longest time come from?
const durationFishes = (pFishes) => {
  const duration = pFishes
    .map((fish) => fish.durationInDays)
    .sort((fish1, fish2) => fish2 - fish1)[0];

  return pFishes
    .filter((fish) => fish.durationInDays === duration)
    .map((fish) => fish.fishType)
    .toString();
};

//9) What is the average price of fish sold in the Romandy for the winter and fall season? (ROMANDY kanton = GE, VD, VU, NE)
const avaragePriceOfFishesInRomandy = (pFishes) => {
  const AvarageFishes = pFishes
    .filter(
      (fish) =>
        (fish.season === "Winter" || fish.season === "Autumn") &&
        (fish.saleLocations.includes("GE") ||
          fish.saleLocations.includes("VD") ||
          fish.saleLocations.includes("VU") ||
          fish.saleLocations.includes("NE"))
    )
    .map((fish) => fish.price)
    .reduce((fish1, fish2) => fish1 + fish2);
  return AvarageFishes;
};
//10) How many fish are in stock for the Canton of Ticino?

const cantonOfTicino = (pFishes) => {
  const totalFishes = pFishes
    .filter((fish) => fish.saleLocations.includes("TI"))
    .map((fish) => fish.stockVolumeInKg)
    .reduce((fish1, fish2) => fish1 + fish2);

  return totalFishes;
};
//11) Find the average weight of fish from the summer season, from outside the EU and sold in ZH?
const avarageOfFishesWeightInZurich = (pFishes) => {
  const AvarageWeigthFishes = pFishes.filter(
    (fish) =>
      fish.season === "Summer" &&
      (fish.originCountry !== "Spain" ||
        fish.originCountry !== "Italy" ||
        fish.originCountry !== "GREECE" ||
        fish.originCountry !== "France" ||
        fish.originCountry !== "Poland") &&
      fish.saleLocations.includes("ZH")
  );
  // .map((fish) => fish.itemWeightInGrams)
  // .reduce((fish1, fish2) => fish1 + fish2);
  return (
    AvarageWeigthFishes.reduce(
      (fish1, fish2) => fish1.itemWeightInGrams + fish2.itemWeightInGrams
    ) / AvarageWeigthFishes.length
  );
};
export {
  fishNameStockOver500,
  fishNamePriceBetween9and12,
  winterSeasonFishInBern,
  fishPriceLessThan10FromAB,
  totalFishStock,
  lisTheFishAccording,
  mostExpensiveFish,
  durationFishes,
  avaragePriceOfFishesInRomandy,
  cantonOfTicino,
  avarageOfFishesWeightInZurich,
};
