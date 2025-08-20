import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from "./general";

export const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: StatusBar.currentHeight,
    gap: 24,
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
  detailsView: {
    gap: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  textView: {
    gap: 5,
  },
  nameText: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    color: COLORS.white,
  },
  emailText: {
    fontFamily: FONTS.regular,
    fontSize: 16,
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
  messageText: {
    fontFamily: FONTS.medium,
    fontSize: 18,
    color: COLORS.white,
  },
  joinedText: {
    paddingBottom: 20,
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.gray,
  },
});
