import OtherHeader from "@/components/OtherHeader";
import { suggestionStyles } from "@/styles/suggestions";
import { View } from "react-native";

const Suggestions = () => {
  const { container } = suggestionStyles;

  return (
    <View style={container}>
      <OtherHeader title="Suggestions" />
    </View>
  );
};

export default Suggestions;
