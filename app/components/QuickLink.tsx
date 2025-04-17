import React, { FC, PropsWithChildren, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { NavigatorContext } from "./NavigatorContext";

interface QuickLinkGroupProps {
  navigation: any;
  title: string;
}

export const QuickLinkGroup: FC<PropsWithChildren<QuickLinkGroupProps>> = ({
  navigation,
  title,
  children,
}) => {
  return (
    <View className="h-auto w-4/5 flex flex-col">
      <Text className="section-header outfitRegular muted-text flex-start">
        {title}
      </Text>
      <View className="flex flex-row justify-between max-w-full flex-wrap">
        <NavigatorContext.Provider value={navigation}>
          {children}
        </NavigatorContext.Provider>
      </View>
    </View>
  );
};

interface QuickLinkProps {
  text: string;
  icon: string;
  screen: string;
}

export default function QuickLink({ text, icon, screen }: QuickLinkProps) {
  const navigator = useContext(NavigatorContext);
  return (
    <TouchableOpacity onPress={() => navigator.navigate(screen)}>
      <View
        style={styles.quickLinks}
        className="p-3 rounded-xl flex flex-col items-center justify-center w-auto dark-text"
      >
        <FontAwesome name={icon} size={25} color="#0d3500" />
        <View className="w-full items-center justify-center">
          <Text className="mt-2 outfitRegular dark-text">{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  quickLinks: {
    boxShadow: "1px 2px 3px 1px #a9a9a9",
  },
});
