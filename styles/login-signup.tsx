import { StatusBar, StyleSheet } from "react-native";
import { COLORS } from "./general";

export const loginSignupStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.black,
  },
  footer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  footerText: { fontSize: 18, color: COLORS.white },
  footerButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
  },
  passwordView: { alignItems: "center", justifyContent: "center" },
  passwordIcon: { position: "absolute", right: 15 },
  actionButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    // fontFamily: FONTS.medium,
    fontSize: 18,
    color: COLORS.white,
  },
  errorText: {
    color: COLORS.red,
    fontSize: 16,
    // fontFamily: FONTS.medium,
  },
  loadingText: {
    color: COLORS.white,
    fontSize: 16,
    // fontFamily: FONTS.medium,
  },
  loginView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  forgotButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 10,
  },
  forgotText: {
    // fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.white,
  },
});
