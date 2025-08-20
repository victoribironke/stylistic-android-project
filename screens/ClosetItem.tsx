import OtherHeader from "@/components/OtherHeader";
import { selected_item_state, user_details } from "@/lib/atoms";
import { db } from "@/lib/firebase";
import { getIcon } from "@/lib/utils";
import { closetItemStyles } from "@/styles/closet-item";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { useAtomValue } from "jotai";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ClosetItem = () => {
  const { colors, id, cut, fabric, pattern, sleeve, subtype, type, waist } =
    useAtomValue(selected_item_state);
  const { uid } = useAtomValue(user_details);
  const {
    container,
    button,
    buttonText,
    colorsContainer,
    colorsView,
    separator,
    subTypeText,
    typeText,
    typesView,
    imageView,
    itemImage,
  } = closetItemStyles;

  const deleteItem = async () => {
    await updateDoc(doc(db, "users", uid), {
      closetItems: arrayRemove({
        colors,
        id,
        cut,
        fabric,
        pattern,
        sleeve,
        subtype,
        type,
        waist,
      }),
    });
  };

  return (
    <View style={container}>
      <OtherHeader title="Closet Item" />

      <View style={imageView}>
        <Image
          source={{ uri: getIcon(type, subtype, sleeve) }}
          style={itemImage}
        />
      </View>

      <View style={colorsContainer}>
        {colors.map((color, i) => (
          <View style={[{ backgroundColor: color }, colorsView]} key={i}></View>
        ))}
      </View>

      <View style={typesView}>
        <Text style={typeText}>{type}</Text>
        <View style={separator}></View>
        <Text style={subTypeText}>{subtype}</Text>
      </View>

      <TouchableOpacity
        style={[{ backgroundColor: "red" }, button]}
        onPress={deleteItem}
      >
        <Text style={buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClosetItem;
