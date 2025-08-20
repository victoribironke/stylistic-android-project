import { OtherHeaderProps } from "@/lib/types";
import { otherHeaderStyles } from "@/styles/general";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

const OtherHeader = ({ title }: OtherHeaderProps) => {
  const { otherHeader, otherHeaderText } = otherHeaderStyles;

  const { goBack } = useNavigation();

  return (
    <View style={otherHeader}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={42}
        color="white"
        onPress={goBack}
      />

      <Text style={otherHeaderText}>{title}</Text>
    </View>
  );
};

export default OtherHeader;
