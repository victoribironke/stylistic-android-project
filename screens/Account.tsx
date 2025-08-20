import OtherHeader from "@/components/OtherHeader";
import { user_details } from "@/lib/atoms";
import { auth } from "@/lib/firebase";
import { formatDate } from "@/lib/utils";
import { accountStyles } from "@/styles/account";
import { COLORS } from "@/styles/general";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { openBrowserAsync } from "expo-web-browser";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Account = () => {
  const [message, setMessage] = useState("");
  const userData = useAtomValue(user_details);
  const { dispatch } = useNavigation();

  const {
    container,
    detailsView,
    textView,
    emailText,
    nameText,
    button,
    buttonText,
    joinedText,
    messageText,
  } = accountStyles;

  const imageURI = {
    uri: userData.imageURL,
  };

  const convertTimestamp = (timestamp: any) => {
    const date = timestamp.toDate();
    const mm = date.getMonth();
    const dd = date.getDate();
    const yyyy = date.getFullYear();

    const [day, month, year] = formatDate(dd, mm, yyyy);

    return `${day} ${month}, ${year}`;
  };

  const signOutUser = () => {
    signOut(auth);

    dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: "Login Signup" },
          { name: "Home Screen" },
          { name: "Suggestions" },
          { name: "Account" },
          { name: "Add Stuff" },
          { name: "Closet Item" },
          { name: "Color Selection" },
        ],
      })
    );
  };

  const resetPassword = async () => {
    await sendPasswordResetEmail(auth, userData.email);
    setMessage("Password reset link sent!");

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <View style={container}>
      <OtherHeader title="Account" />

      <View style={detailsView}>
        <Image source={imageURI} style={{ width: 40, height: 40 }} />
        <View style={textView}>
          <Text style={nameText}>{userData.name}</Text>
          <Text style={emailText}>{userData.email}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          { backgroundColor: COLORS.green, marginBottom: "auto" },
          button,
        ]}
        onPress={() => openBrowserAsync("https://stylistic.app/discord")}
      >
        <Text style={buttonText}>Join the discord community</Text>
      </TouchableOpacity>

      {message && <Text style={messageText}>{message}</Text>}

      <TouchableOpacity
        style={[{ backgroundColor: COLORS.regular }, button]}
        onPress={resetPassword}
      >
        <Text style={buttonText}>Reset your password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[{ backgroundColor: COLORS.red }, button]}
        onPress={signOutUser}
      >
        <Text style={buttonText}>Sign out</Text>
      </TouchableOpacity>

      <Text style={joinedText}>{`Joined: ${convertTimestamp(
        userData.createdAt
      )}`}</Text>
    </View>
  );
};

export default Account;
