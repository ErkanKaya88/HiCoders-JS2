import { families } from "./families.js";
import {
  salaryListmore5000,
  maleChildren,
  girlsChildren,
  Childrenunder8,
  motherOfChildrenOlderThen8,
} from "./function.js";
//maasi 5000den fazla olanlar
const listedSalary = salaryListmore5000(families);
listedSalary.forEach((name, index) => {
  console.log(`${index + 1}.${name}`);
});
//erkek cocuklar
const listedMaleChildren = maleChildren(families);
listedMaleChildren.forEach((name, index) => {
  console.log(`${index + 1}.${name}`);
});
console.log(maleChildren(families).length);

//kiz cocuklar
const listedgirlChildren = girlsChildren(families);
listedgirlChildren.forEach((name, index) => {
  console.log(`${index + 1}.${name}`);
});
console.log(girlsChildren(families).length);

//8den kucuk
const listedChildrenunder8 = Childrenunder8(families);
listedChildrenunder8.forEach((name, index) => {
  console.log(`${index + 1}.${name}`);
});

//8den buyuk
const listedmotherOfChildrenOlderThen8 = motherOfChildrenOlderThen8(families);
listedmotherOfChildrenOlderThen8.forEach((name, index) => {
  console.log(`${index + 1}.${name}`);
});
