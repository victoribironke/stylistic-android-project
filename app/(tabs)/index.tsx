import Account from "@/screens/Account";
import AddStuff from "@/screens/AddStuff";
import ClosetItem from "@/screens/ClosetItem";
import ColorSelection from "@/screens/ColorSelection";
import Home from "@/screens/Home";
import LoginSignup from "@/screens/LoginSignup";
import Suggestions from "@/screens/Suggestions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "gt-regular": require("../../assets/fonts/GTWalsheimPro-Regular.ttf"),
    "gt-medium": require("../../assets/fonts/GTWalsheimPro-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login Signup"
        component={LoginSignup}
        options={{ headerShown: false, animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="Home Screen"
        component={Home}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Suggestions"
        options={{ headerShown: false, animation: "fade_from_bottom" }}
        component={Suggestions}
      />
      <Stack.Screen
        name="Account"
        options={{ headerShown: false, animation: "fade_from_bottom" }}
        component={Account}
      />
      <Stack.Screen
        name="Add Stuff"
        options={{ headerShown: false, animation: "fade_from_bottom" }}
        component={AddStuff}
      />
      <Stack.Screen
        name="Closet Item"
        options={{ headerShown: false, animation: "fade_from_bottom" }}
        component={ClosetItem}
      />
      <Stack.Screen
        name="Color Selection"
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
          presentation: "containedTransparentModal",
        }}
        component={ColorSelection}
      />
    </Stack.Navigator>
    // {/* </NavigationContainer> */}
  );
};

export default App;
