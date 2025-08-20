import { StatusBar, StyleSheet } from "react-native";
import { COLORS, FONTS } from "./general";

export const suggestionStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: StatusBar.currentHeight,
    gap: 24,
    backgroundColor: COLORS.black,
    alignItems: "center",
  },
  headerText: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    textAlign: "center",
    color: COLORS.white,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  buttonText: { fontFamily: FONTS.medium, color: "white", fontSize: 18 },
});
