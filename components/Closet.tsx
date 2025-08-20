import { user_details } from "@/lib/atoms";
import { homeStyles } from "@/styles/home";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAtomValue } from "jotai";
import { Text, TouchableOpacity, View } from "react-native";
import Items from "./Items";
import NoItems from "./NoItems";

const Closet = () => {
  const {
    closetView,
    itemsText,
    closetContainer,
    suggestions,
    suggestionsText,
    addStuff,
  } = homeStyles;
  const { navigate } = useNavigation();

  const { closetItems } = useAtomValue(user_details);

  return (
    <View style={closetContainer}>
      <View style={closetView}>
        <Text style={itemsText}>Closet Items</Text>

        <TouchableOpacity
          style={addStuff}
          onPress={() => navigate("Add Stuff" as never)}
        >
          <AntDesign name="plus" color="white" size={16} />
        </TouchableOpacity>

        <TouchableOpacity
          style={suggestions}
          onPress={() => navigate("Suggestions" as never)}
        >
          <Text style={suggestionsText}>Suggestions</Text>
        </TouchableOpacity>
      </View>

      {closetItems.length === 0 ? <NoItems /> : <Items data={closetItems} />}
    </View>
  );
};

export default Closet;
