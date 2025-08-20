import Closet from "@/components/Closet";
import Credits from "@/components/Credits";
import HomeHeader from "@/components/HomeHeader";
import { homeStyles } from "@/styles/home";
import { View } from "react-native";

const Home = () => {
  const { container } = homeStyles;

  return (
    <View style={container}>
      <HomeHeader />
      <Credits />
      <Closet />
    </View>
  );
};

export default Home;
