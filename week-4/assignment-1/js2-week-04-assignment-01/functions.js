import { productList } from "./data";

const getProductsOfNormalQuality = () => {
  return productList.filter((product) => product.quality === "Normal");
};

const getProductImageWithPngExtension = () => {
  return productList.filter((product) => product.productImage.includes("png"));
};

const getCalorieOfTheMostExpensiveProduct = () => {
  const productCalories = productList.sort(
    (product1, product2) => product2.price - product1.price
  );

  return productCalories[0].totalCalories;
};

const sortByExpirationDate = () => {
  return productList.sort(
    (product1, product2) => product1.expireDate - product2.expireDate
  );
};

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
