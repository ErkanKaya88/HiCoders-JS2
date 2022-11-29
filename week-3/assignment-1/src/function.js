import { families } from "./families.js";

const salaryListmore5000 = (pArrayFamily) => {
  return pArrayFamily
    .filter((family) => family.salary > 5000)
    .map((familyName) => familyName.firstname + " " + familyName.lastname)
    .sort();
};

const maleChildren = (pArrayFamily) => {
  const boyChild = pArrayFamily.map((family) =>
    family.childrens
      .filter((child) => child.gender === "boy")
      .map((childBoy) => childBoy.name)
  );
  return boyChild.sort().toString("").slice(1).split(",");
};

const girlsChildren = (pArrayFamily) => {
  const girlChild = pArrayFamily.map((family) =>
    family.childrens
      .filter((child) => child.gender === "girl")
      .map((childGirl) => childGirl.name)
  );
  return girlChild.sort().toString("").slice(2).split(",");
};

const Childrenunder8 = (pArrayFamily) => {
  const array = pArrayFamily.map((family) =>
    family.childrens.filter((child) => child.age < 8).map((child) => child.name)
  );

  return array.toString("").split(",");
};

const motherOfChildrenOlderThen8 = (pArrayFamily) => {
  let filteredArray = [];
  pArrayFamily.forEach((family) =>
    family.childrens.map((child) => {
      if (child.age > 8 && !filteredArray.includes(family.partner)) {
        filteredArray.push(family.partner);
      }
    })
  );

  return filteredArray;
};

export {
  salaryListmore5000,
  maleChildren,
  girlsChildren,
  Childrenunder8,
  motherOfChildrenOlderThen8,
};
