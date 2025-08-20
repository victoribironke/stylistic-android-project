import ScrollViewItem from "@/components/ScrollViewItem";
import { ItemsProps } from "@/lib/types";
import { splitArr } from "@/lib/utils";
import { homeStyles } from "@/styles/home";
import { ScrollView } from "react-native";

const Items = ({ data }: ItemsProps) => {
  const { itemsView } = homeStyles;
  const { trousersArr, footwearArr, layersArr, shirtsArr } = splitArr(data);

  return (
    <ScrollView style={itemsView} showsVerticalScrollIndicator={false}>
      {shirtsArr.length > 0 && (
        <ScrollViewItem text="Shirts" data={shirtsArr} />
      )}
      {layersArr.length > 0 && (
        <ScrollViewItem text="Layers" data={layersArr} />
      )}
      {trousersArr.length > 0 && (
        <ScrollViewItem text="Trousers" data={trousersArr} />
      )}
      {footwearArr.length > 0 && (
        <ScrollViewItem text="Footwear" data={footwearArr} />
      )}
    </ScrollView>
  );
};

export default Items;
