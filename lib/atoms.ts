import { atom } from "jotai";

const user_details = atom({
  uid: "",
  imageURL: "",
  name: "",
  email: "",
  closetItems: [],
  credits: 0,
  createdAt: "",
});

const loading_state = atom("");

const selected_item_state = atom({
  type: "",
  subtype: "",
  sleeve: "",
  fabric: "",
  cut: "",
  waist: "",
  pattern: "",
  id: "",
  colors: [""],
  neck: "",
});

//   export const loadingState = atom({
//     key: "loading",
//     default: "",
//   });

const selection_state = atom({
  type: "",
  subtype: "",
  sleeve: "",
  fabric: "",
  cut: "",
  waist: "",
  pattern: "",
  mainColor: "",
  accentColors: [""],
  neck: "",
});

export { loading_state, selected_item_state, selection_state, user_details };
