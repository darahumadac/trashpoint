import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

interface QuickLinkProps {
  text: string;
  icon: string;
}

export default function QuickLink({ text, icon }: QuickLinkProps) {
  return (
    <View
      style={styles.quickLinks}
      className="p-3 rounded-xl flex flex-col items-center justify-center w-auto dark-text"
    >
      <FontAwesome name={icon} size={25} color="#0d3500" />
      <View className="w-full items-center justify-center">
        <Text className="mt-2 outfitRegular dark-text">{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quickLinks: {
    boxShadow: "1px 2px 3px 1px #a9a9a9"
  },
});
