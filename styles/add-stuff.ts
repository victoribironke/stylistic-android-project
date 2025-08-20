import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from "./general";

export const addStuffStyles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  buttonText: { fontFamily: FONTS.medium, color: "white", fontSize: 18 },
});
