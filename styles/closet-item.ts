import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from "./general";

export const closetItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    marginTop: StatusBar.currentHeight,
    gap: 24,
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
  colorsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  colorsView: { padding: 20, borderRadius: 100 },
  typesView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  typeText: { fontFamily: FONTS.medium, fontSize: 25, color: COLORS.white },
  separator: { padding: 5, backgroundColor: COLORS.gray, borderRadius: 100 },
  subTypeText: { fontFamily: FONTS.regular, fontSize: 25, color: COLORS.white },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: FONTS.regular,
    fontSize: 20,
  },
  imageView: {
    width: "70%",
    aspectRatio: "1/1",
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  itemImage: { width: "80%", aspectRatio: "1/1" },
});
