import { homeStyles } from "@/styles/home";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

const NoItems = () => {
  const { noItemsView, noItemsText, addStuff, addStuffText } = homeStyles;
  const { navigate } = useNavigation();

  return (
    <View style={noItemsView}>
      <Text style={noItemsText}>No items.</Text>

      <TouchableOpacity
        style={addStuff}
        onPress={() => navigate("Add Stuff" as never)}
      >
        <Text style={addStuffText}>Add stuff</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoItems;
