import { loading_state } from "@/lib/atoms";
import { auth } from "@/lib/firebase";
import { validateEmail } from "@/lib/utils";
import { COLORS, formStyles } from "@/styles/general";
import { Feather } from "@expo/vector-icons";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAtom } from "jotai";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { loginSignupStyles } from "../styles/login-signup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useAtom(loading_state);

  const {
    actionButton,
    actionText,
    errorText,
    passwordIcon,
    passwordView,
    loadingText,
    loginView,
    forgotButton,
    forgotText,
  } = loginSignupStyles;
  const { formView, input } = formStyles;

  const handleAuth = async () => {
    setError("");

    if (validateEmail(email)) {
      try {
        setIsLoading("Logging in...");

        await signInWithEmailAndPassword(auth, email, password);
      } catch (e) {
        setError("Email or password is incorrect");
      }
    } else setError("Invalid email address");

    setIsLoading("");
  };

  const sendResetEmail = async () => {
    if (validateEmail(email)) {
      try {
        await sendPasswordResetEmail(auth, email);

        setIsLoading("Password reset link sent");
      } catch (e) {
        setError("No user found with that email address");
      }
    } else setError("Invalid email address");

    setTimeout(() => {
      setError("");
      setIsLoading("");
    }, 2000);
  };

  return (
    <>
      <View style={formView}>
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

      <View style={loginView}>
        <TouchableOpacity style={forgotButton} onPress={sendResetEmail}>
          <Text style={forgotText}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={actionButton} onPress={handleAuth}>
          <Text style={actionText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
