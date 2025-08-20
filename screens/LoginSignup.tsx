import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { user_details } from "@/lib/atoms";
import { clothingData } from "@/lib/data";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { auth, db } from "../lib/firebase";
import { loginSignupStyles } from "../styles/login-signup";

const LoginSignup = () => {
  const { footerText, container, footer, footerButton } = loginSignupStyles;
  const [isLogin, setIsLogin] = useState(true);
  const { navigate } = useNavigation();
  const setUserData = useSetAtom(user_details);

  useEffect(() => {
    let unsubSnapshot: () => void;

    const unsubAuthState = onAuthStateChanged(auth, (user) => {
      if (user) {
        unsubSnapshot = onSnapshot(doc(db, "users", user.uid), (doc) => {
          const data = doc.data();
          setUserData({
            uid: user.uid,
            email: data!.email,
            imageURL: data!.imageURL,
            name: data!.name,
            credits: data!.credits,
            closetItems: [...data!.closetItems, ...clothingData] as any,
            createdAt: data!.createdAt,
          });

          //   setIsLoading("");
          navigate("Home Screen" as never);
        });
      } else {
        navigate("Login Signup" as never);
      }
    });

    return () => {
      unsubAuthState();

      if (unsubSnapshot) unsubSnapshot();
    };
  }, []);

  return (
    <View style={container}>
      {isLogin ? <Login /> : <Signup />}

      <View style={footer}>
        <Text
          style={[
            // { fontFamily: FONTS.regular },
            footerText,
          ]}
        >
          {isLogin ? "Don't have an account?" : "Have an account?"}
        </Text>
        <TouchableOpacity
          style={footerButton}
          onPress={() => setIsLogin((prev) => !prev)}
        >
          <Text
            style={[
              // { fontFamily: FONTS.medium },
              footerText,
            ]}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginSignup;
