import { selected_item_state } from "@/lib/atoms";
import { ItemProps } from "@/lib/types";
import { getIcon } from "@/lib/utils";
import { homeStyles } from "@/styles/home";
import { useNavigation } from "@react-navigation/native";
import { useSetAtom } from "jotai";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Item = ({
  cut,
  colors,
  subtype,
  type,
  id,
  fabric,
  pattern,
  sleeve,
  neck,
  waist,
}: ItemProps) => {
  const {
    itemView,
    colorStyle,
    colorView,
    typeText,
    itemImage,
    imageView,
    itemTop,
  } = homeStyles;
  const setSelectedItem = useSetAtom(selected_item_state);
  const { navigate } = useNavigation();

  const goToItem = () => {
    setSelectedItem({
      cut,
      colors,
      subtype,
      type,
      id,
      fabric,
      pattern,
      sleeve,
      neck,
      waist,
    });
    navigate("Closet Item" as never);
  };

  return (
    <TouchableOpacity style={itemView} onPress={goToItem}>
      <View style={itemTop}>
        <View style={imageView}>
          <Image
            source={{ uri: getIcon(type, subtype, sleeve) }}
            style={itemImage}
          />
        </View>

        <View style={colorView}>
          {colors.map((color, i) => (
            <View
              style={[
                {
                  backgroundColor: color,
                },
                colorStyle,
              ]}
              key={i}
            ></View>
          ))}
        </View>
      </View>
      <Text style={typeText}>{subtype}</Text>
    </TouchableOpacity>
  );
};

export default Item;
