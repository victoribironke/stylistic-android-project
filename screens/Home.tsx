import Closet from "@/components/Closet";
import Credits from "@/components/Credits";
import HomeHeader from "@/components/HomeHeader";
import { user_details } from "@/lib/atoms";
import { auth, db } from "@/lib/firebase";
import { homeStyles } from "@/styles/home";
import { doc, onSnapshot } from "firebase/firestore";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { View } from "react-native";

const Home = () => {
  const { container } = homeStyles;

  const setUserData = useSetAtom(user_details);

  useEffect(() => {
    const unsubSnapshot = onSnapshot(
      doc(db, "users", auth.currentUser?.uid || ""),
      (doc) => {
        const data = doc.data();

        setUserData({
          uid: auth.currentUser?.uid || "",
          email: data!.email,
          imageURL: data!.imageURL,
          name: data!.name,
          credits: data!.credits,
          closetItems: data!.closetItems,
          createdAt: data!.createdAt,
        });
      }
    );

    return unsubSnapshot;
  }, []);

  return (
    <View style={container}>
      <HomeHeader />
      <Credits />
      <Closet />
    </View>
  );
};

export default Home;
