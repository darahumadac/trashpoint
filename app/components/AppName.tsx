import React from "react";
import { View, Text, StyleSheet, DimensionValue } from "react-native";

interface AppNameProps {
  fontSize?: number
  height?: DimensionValue
}

export default function AppName({ fontSize, height }: AppNameProps) {
  const styles = StyleSheet.create({
    appNameContainer: {
      alignSelf: "center",
      alignItems: "center",
      height: height || 220,
    },
    appName: {
      fontSize: fontSize || 50,
      // textShadowRadius: 1,
      // textShadowColor: "#0f1402",
      // textShadowOffset: { width: 1, height: 1 },
      fontFamily: "OutfitBold",
      letterSpacing: 2,
    },
    appNameGreen: {
      color: "#86B314",
    },
    appNameOrange: {
      color: "#E29300",
    },
  });

  return (
    <View style={styles.appNameContainer}>
      <Text style={styles.appName}>
        <Text style={styles.appNameOrange}>Trash</Text>
        <Text style={styles.appNameGreen}>Point</Text>
      </Text>
    </View>
  );
}
