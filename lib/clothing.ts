const sortingFn = (a: string, b: string): number => (a > b ? 1 : -1);

export const clothingTypes = ["Shirt", "Layer", "Trouser", "Footwear"].sort(
  sortingFn
);

const shirts = ["T-shirt", "Button-up", "Polo"].sort(sortingFn);
const layers = ["Sweater", "Sweatshirt", "Jacket", "Blazer", "Hoodie"].sort(
  sortingFn
);
const trousers = [
  "Jeans",
  "Sweatpants",
  "Regular trousers",
  "Chinos",
  "Shorts",
].sort(sortingFn);
const footwears = [
  "Sneakers",
  "Boots",
  "Loafers",
  "Sandals",
  "Oxfords",
  "Flats",
  "Slip-on",
  "Wedge",
  "Mules",
  "Platform",
].sort(sortingFn);

const sleeveType = ["Sleeveless", "Short-sleeve", "Long-sleeve"].sort(
  sortingFn
); // tops

const fabricTypes = [
  "Chambray",
  "Chiffon",
  "Cork",
  "Chino",
  "Cotton",
  "Denim",
  "Flannel",
  "Knit",
  "Lace",
  "Leather",
  "Synthetic",
  "Satin",
  "Suede",
  "Silk",
  "Wool",
  "Woven",
  "Quilted",
].sort(sortingFn); // shirts, layers, footwear, trousers

const shirtCutTypes = [
  "Fitted",
  "Loose",
  "Zip-up",
  "Straight",
  "Camisole",
].sort(sortingFn); // tops

const trousersCutTypes = ["Fitted", "Loose", "Slim", "Straight", "Flare"].sort(
  sortingFn
); // trousers

const waistTypes = ["Low rise", "Mid rise", "High waisted"].sort(sortingFn); // trousers

const patterns = [
  "Solid",
  "Color block",
  "Horizontal stripes",
  "Vertical stripes",
  "Checked",
  "Geometric print",
  "Floral",
  "Animal print",
  "Plaid",
  "Graphic tee",
].sort(sortingFn); // tops

const neckTypes = [
  "Crew neck",
  "V-neck",
  "Boat neck",
  "Collared",
  "Turtleneck",
].sort(sortingFn);

export const subTypes = {
  shirts,
  layers,
  trousers,
  footwears,
};

export const extraTypes = {
  sleeveType,
  fabricTypes,
  shirtCutTypes,
  trousersCutTypes,
  waistTypes,
  patterns,
  neckTypes,
};
