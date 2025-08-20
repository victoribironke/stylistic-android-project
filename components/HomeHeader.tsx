import { user_details } from "@/lib/atoms";
import { homeStyles } from "@/styles/home";
import { useNavigation } from "@react-navigation/native";
import { useAtomValue } from "jotai";
import { Image, Text, TouchableOpacity, View } from "react-native";

const HomeHeader = () => {
  const { header, leftHeader, welcomeText, nameText, profileImage } =
    homeStyles;
  const userData = useAtomValue(user_details);

  const { navigate } = useNavigation();

  const imageURI = {
    uri: userData.imageURL,
  };

  return (
    <View style={header}>
      <View style={leftHeader}>
        <Text style={welcomeText}>Welcome,</Text>
        <Text style={nameText}>{userData.name}</Text>
      </View>

      <TouchableOpacity onPress={() => navigate("Account" as never)}>
        <Image source={imageURI} style={profileImage} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
