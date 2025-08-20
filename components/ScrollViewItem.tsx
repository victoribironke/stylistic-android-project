import Item from "@/components/Item";
import { ScrollViewItemProps } from "@/lib/types";
import { homeStyles } from "@/styles/home";
import { ScrollView, Text, View } from "react-native";

const ScrollViewItem = ({ data, text }: ScrollViewItemProps) => {
  const { scrollView, scrollItemView, scrollItemText } = homeStyles;

  return (
    <View style={scrollItemView}>
      <Text style={scrollItemText}>{text}</Text>
      <ScrollView
        style={scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, i) => (
          <Item
            cut={item.cut}
            fabric={item.fabric}
            pattern={item.pattern}
            sleeve={item.sleeve}
            waist={item.waist}
            subtype={item.subtype}
            type={item.type}
            id={item.id}
            neck={item.neck}
            key={i}
            colors={item.colors}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollViewItem;
