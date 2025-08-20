import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "./general";

export const colorSelectionStyles = StyleSheet.create({
  modalView: {
    width: "100%",
    height: "auto",
    padding: 20,
    backgroundColor: COLORS.white,
    display: "flex",
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 20,
  },
  headerView: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: { fontFamily: FONTS.medium, fontSize: 18 },
  closeButton: { backgroundColor: COLORS.red, padding: 10, borderRadius: 10 },
  colorsSelectView: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 50,
    gap: 15,
  },
  color: {
    width: 35,
    height: 35,
    borderRadius: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
