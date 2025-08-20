import { user_details } from "@/lib/atoms";
import { clothingData } from "@/lib/data";
import { ItemProps } from "@/lib/types";
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

  const fullClosetItems = [...closetItems, ...clothingData];

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

      {fullClosetItems.length === 0 ? (
        <NoItems />
      ) : (
        <Items data={fullClosetItems as ItemProps[]} />
      )}
    </View>
  );
};

export default Closet;
