import OtherHeader from "@/components/OtherHeader";
import { user_details } from "@/lib/atoms";
import { ItemProps } from "@/lib/types";
import { getIcon, months } from "@/lib/utils";
import { COLORS } from "@/styles/general";
import { homeStyles } from "@/styles/home";
import { suggestionStyles } from "@/styles/suggestions";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useAtomValue } from "jotai";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Suggestions = () => {
  const { container, headerText, button, buttonText } = suggestionStyles;
  const {
    itemView,
    colorStyle,
    colorView,
    typeText,
    itemImage,
    imageView,
    itemTop,
  } = homeStyles;
  const { closetItems } = useAtomValue(user_details);
  const [loading, setLoading] = useState(false);
  const [suggested, setSuggested] = useState<ItemProps[] | null>(null);

  const GOOGLE_API_KEY = "AIzaSyAS8UGmS14xTFzU7AeOHgvbDsfNQi1V3Rw";

  const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
  const llm = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleGenerate = async () => {
    if (!closetItems || closetItems.length === 0) {
      Alert.alert("No items", "Add some closet items first.");
      return;
    }

    try {
      setLoading(true);
      const system =
        'You are a fashion assistant. From the provided closet items, generate a coherent outfit as an array of 2-4 items. Respond with ONLY valid JSON array matching the exact ItemProps shape: [{"type": string, "subtype": string, "id": string, "sleeve": string, "fabric": string, "cut": string, "waist": string, "pattern": string, "neck": string, "colors": string[]}]. Use color hex codes from input where possible. Keep plausible combinations (one of each: Shirt, Trouser, optionally Layer, and Footwear).';

      const user = JSON.stringify({ closetItems });

      const result = await llm.generateContent({
        contents: [
          { role: "user", parts: [{ text: system }] },
          { role: "user", parts: [{ text: user }] },
        ],
      });

      const llmResponseContent = result.response.candidates?.[0]?.content
        ?.parts?.[0]?.text as string;

      const cleanedResponse = llmResponseContent
        .replace("```json", "")
        .replace("```", "");
      const parsed = JSON.parse(cleanedResponse);

      setSuggested(parsed);

      console.log(parsed);
    } catch (e: any) {
      Alert.alert("Error", e?.message || "Could not generate suggestions");
    } finally {
      setLoading(false);
    }
  };

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const suffix =
    day % 10 === 1
      ? "st"
      : day % 10 === 2
      ? "nd"
      : day % 10 === 3
      ? "rd"
      : "th";

  return (
    <View style={container}>
      <OtherHeader title="Suggestions" />

      <Text style={headerText}>
        Suggestions for {day}
        <Text>{suffix}</Text> {months[month]}, {year}
      </Text>

      <TouchableOpacity
        style={[
          {
            backgroundColor: COLORS.green,
            opacity: loading ? 0.7 : 1,
          },
          button,
        ]}
        onPress={handleGenerate}
        disabled={loading}
      >
        <Text style={buttonText}>
          {loading ? "Generating..." : "Get suggestions"}
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator color={COLORS.white} />}

      {suggested &&
        suggested.length > 0 &&
        suggested.map((item) => (
          <TouchableOpacity
            style={[itemView, { marginBottom: -10 }]}
            onPress={() => {}}
            key={item.id}
          >
            <View style={itemTop}>
              <View style={imageView}>
                <Image
                  source={{
                    uri: getIcon(item.type, item.subtype, item.sleeve),
                  }}
                  style={itemImage}
                />
              </View>

              <View style={colorView}>
                {item.colors.map((color, i) => (
                  <View
                    style={[
                      {
                        backgroundColor: color,
                      },
                      colorStyle,
                    ]}
                    key={i}
                  ></View>
                ))}
              </View>
            </View>
            <Text style={typeText}>
              {item.type} - {item.subtype}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Suggestions;
