import { user_details } from "@/lib/atoms";
import { homeStyles } from "@/styles/home";
import { openBrowserAsync } from "expo-web-browser";
import { useAtomValue } from "jotai";
import { Text, TouchableOpacity, View } from "react-native";

const Credits = () => {
  const userData = useAtomValue(user_details);

  const {
    credits,
    creditAmount,
    creditContainer,
    creditText,
    buyCredits,
    buyCreditsText,
  } = homeStyles;

  return (
    <View style={creditContainer}>
      <View style={credits}>
        <Text style={creditAmount}>{userData.credits}</Text>
        <Text style={creditText}>credits left</Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          openBrowserAsync(
            "https://stylistic.lemonsqueezy.com/checkout/buy/e4bed891-415e-4dbc-bd6a-a6b79a4b2b83"
          )
        }
        style={buyCredits}
      >
        <Text style={buyCreditsText}>Buy credits</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Credits;
