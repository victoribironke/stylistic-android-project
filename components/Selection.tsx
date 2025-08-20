import { ColorSelectionProps, SelectProps } from "@/lib/types";
import { COLORS, selectionStyles } from "@/styles/general";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const {
  selectContainer,
  colorSelectButton,
  titleText,
  borderColor,
  selectionText,
  selectionButton,
  mainColorsView,
} = selectionStyles;

const ColorSelection = ({ action, arr, title, stateToCheck }: SelectProps) => {
  return (
    <View style={selectContainer}>
      <Text style={titleText}>{title.toUpperCase()}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {arr.map((a, i) => (
          <View
            style={[a === stateToCheck && borderColor, mainColorsView]}
            key={i}
          >
            <TouchableOpacity
              style={[{ backgroundColor: a }, colorSelectButton]}
              onPress={() => action(a)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const AccentColorSelection = ({ action, arr, title }: ColorSelectionProps) => {
  return (
    <View style={selectContainer}>
      <Text style={titleText}>{title.toUpperCase()}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {arr
          .filter((a) => a !== "")
          .map((a, i) => (
            <TouchableOpacity
              style={[
                { backgroundColor: a, marginRight: 10 },
                colorSelectButton,
              ]}
              key={i}
            />
          ))}
        <TouchableOpacity
          style={[
            {
              backgroundColor: COLORS.white,
              padding: 8,
              marginRight: 10,
            },
            colorSelectButton,
          ]}
          onPress={action}
        >
          <AntDesign name="plus" size={16} color="black" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const Selection = ({ arr, title, stateToCheck, action }: SelectProps) => {
  return (
    <View style={selectContainer}>
      <Text style={titleText}>{title.toUpperCase()}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {arr.map((a, i) => (
          <TouchableOpacity
            style={[
              {
                backgroundColor:
                  a === stateToCheck ? COLORS.primary : COLORS.primary300,
              },
              selectionButton,
            ]}
            key={i}
            onPress={() => action(a)}
          >
            <Text style={selectionText}>{a}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export { AccentColorSelection, ColorSelection };
export default Selection;
