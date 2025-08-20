import { ItemProps } from "./types";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const splitArr = (arr: ItemProps[]) => {
  const shirtsArr: ItemProps[] = [];
  const layersArr: ItemProps[] = [];
  const trousersArr: ItemProps[] = [];
  const footwearArr: ItemProps[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "Shirt") shirtsArr.push(arr[i]);
    else if (arr[i].type === "Layer") layersArr.push(arr[i]);
    else if (arr[i].type === "Trouser") trousersArr.push(arr[i]);
    else if (arr[i].type === "Footwear") footwearArr.push(arr[i]);
  }

  return {
    shirtsArr,
    layersArr,
    trousersArr,
    footwearArr,
  };
};

export const randomString = () => {
  return `id_${new Date().getTime()}`;
};

export const formatDate = (day: any, month: any, year: any) => {
  let newDay = "";
  let newMonth = "";

  const dayStr = day.toString();
  if (dayStr.length === 1) newDay = `0${dayStr}`;
  else newDay = dayStr;

  newMonth = months[month];

  return [newDay, newMonth, year];
};

export const validateEmail = (email: string) => {
  const isValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );

  return isValid;
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
};

export const getIcon = (
  type: string,
  subtype: string,
  sleeve?: string
): string => {
  const BASE_URL = "https://stylistic-web.vercel.app/app-icons";
  const EXT = ".png";

  if (type === "Footwear") {
    if (subtype === "Boots") return `${BASE_URL}/footwear/boot${EXT}`;
    else if (subtype === "Flats") return `${BASE_URL}/footwear/flats${EXT}`;
    else if (subtype === "Loafers") return `${BASE_URL}/footwear/loafer${EXT}`;
    else if (subtype === "Mules") return `${BASE_URL}/footwear/mule${EXT}`;
    else if (subtype === "Oxfords") return `${BASE_URL}/footwear/oxford${EXT}`;
    else if (subtype === "Platform")
      return `${BASE_URL}/footwear/platform${EXT}`;
    else if (subtype === "Sandals") return `${BASE_URL}/footwear/sandal${EXT}`;
    else if (subtype === "Slip-on") return `${BASE_URL}/footwear/slip-on${EXT}`;
    else if (subtype === "Sneakers")
      return `${BASE_URL}/footwear/sneakers${EXT}`;
    else if (subtype === "Wedge") return `${BASE_URL}/footwear/wedge${EXT}`;
  } else if (type === "Layer") {
    if (subtype === "Blazer") return `${BASE_URL}/layers/blazer${EXT}`;
    else if (subtype === "Hoodie") return `${BASE_URL}/layers/hoodie${EXT}`;
    else if (subtype === "Jacket") return `${BASE_URL}/layers/jacket${EXT}`;
    else if (subtype === "Sweater" || subtype === "Sweatshirt")
      return `${BASE_URL}/layers/sweater${EXT}`;
  } else if (type === "Shirt") {
    if (subtype === "Button-up") {
      if (sleeve === "Long-sleeve")
        return `${BASE_URL}/shirts/button-up-long-sleeve${EXT}`;
      else return `${BASE_URL}/shirts/button-up-short-sleeve${EXT}`;
    } else if (subtype === "Polo") return `${BASE_URL}/shirts/polo${EXT}`;
    else if (subtype === "T-shirt") return `${BASE_URL}/shirts/tshirt${EXT}`;
  } else if (type === "Trouser") {
    if (subtype === "Shorts") return `${BASE_URL}/trousers/shorts${EXT}`;
    else if (subtype === "Sweatpants")
      return `${BASE_URL}/trousers/sweatpants${EXT}`;
    else return `${BASE_URL}/trousers/trousers${EXT}`;
  }

  return "";
};

export const profilePlaceholder = (seed: string): string => {
  return `https://api.dicebear.com/6.x/identicon/png?seed=${seed}`;
};
