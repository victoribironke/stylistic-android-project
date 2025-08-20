import { loading_state } from "@/lib/atoms";
import { auth, db } from "@/lib/firebase";
import { profilePlaceholder, validateEmail } from "@/lib/utils";
import { COLORS, formStyles } from "@/styles/general";
import { Feather } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useAtom } from "jotai";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { loginSignupStyles } from "../styles/login-signup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [isLoading, setIsLoading] = useAtom(loading_state);
  const [error, setError] = useState("");

  const {
    actionButton,
    actionText,
    errorText,
    passwordIcon,
    passwordView,
    loadingText,
  } = loginSignupStyles;
  const { formView, input } = formStyles;

  const handleAuth = async () => {
    setError("");

    if (validateEmail(email)) {
      try {
        setIsLoading("Signing you up...");

        const user = await (
          await createUserWithEmailAndPassword(auth, email, password)
        ).user;

        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          uid: user.uid,
          name: fullname,
          imageURL: profilePlaceholder(fullname),
          credits: 100,
          closetItems: [],
          createdAt: serverTimestamp(),
        });

        await setDoc(doc(db, "user-mappings", user.email!), { uid: user.uid });
      } catch (e) {
        setError("Email already in use");
      }
    } else setError("Invalid email address");

    setIsLoading("");
  };

  return (
    <>
      <View style={formView}>
        <TextInput
          placeholder="Full Name"
          style={input}
          value={fullname}
          onChangeText={(text) => setFullName(text)}
          placeholderTextColor={COLORS.gray}
        />
        <TextInput
          placeholder="Email"
          style={input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor={COLORS.gray}
        />
        <View style={passwordView}>
          <TextInput
            placeholder="Password"
            style={input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!viewPassword}
            placeholderTextColor={COLORS.gray}
          />
          <Feather
            name={!viewPassword ? "eye" : "eye-off"}
            size={24}
            color={COLORS.white}
            style={passwordIcon}
            onPress={() => setViewPassword((prev) => !prev)}
          />
        </View>
      </View>

      {error && <Text style={errorText}>{error}</Text>}

      {isLoading && <Text style={loadingText}>{isLoading}</Text>}

      <TouchableOpacity style={actionButton} onPress={handleAuth}>
        <Text style={actionText}>Sign up</Text>
      </TouchableOpacity>
    </>
  );
};

export default Signup;
