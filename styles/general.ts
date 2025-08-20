import { StyleSheet } from "react-native";

export const FONTS = {
  regular: "gt-regular",
  medium: "gt-medium",
};

export const COLORS = {
  green: "#16A34A",
  gray: "#27272a",
  primary: "#710193",
  primary100: "#61087d",
  primary200: "#4a0e5d",
  primary300: "#2d1235",
  primary400: "#140e16",
  purpleLight: "#fe95e2",
  regular: "#9f39fe",
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
};

export const otherHeaderStyles = StyleSheet.create({
  otherHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  otherHeaderText: {
    fontFamily: FONTS.medium,
    fontSize: 22,
    color: COLORS.white,
  },
});

export const selectionStyles = StyleSheet.create({
  selectContainer: { width: "90%", gap: 10 },
  selectionText: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
  selectionButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  titleText: {
    fontFamily: FONTS.medium,
    fontSize: 18,
    color: COLORS.white,
  },
  colorSelectButton: {
    borderRadius: 500,
    width: 35,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  borderColor: {
    borderColor: COLORS.white,
    borderWidth: 2,
    borderRadius: 500,
    padding: 2,
  },
  mainColorsView: {
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export const formStyles = StyleSheet.create({
  formView: { width: "80%", gap: 10 },
  input: {
    borderWidth: 1,
    borderColor: COLORS.white,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontFamily: FONTS.medium,
    fontSize: 18,
    color: COLORS.white,
  },
});
