import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Splash({ navigation }: any) {
  const [loaded] = useFonts({
    ChelseaMarket: require("../assets/fonts/ChelseaMarket-Regular.ttf"),
    Outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    OutfitBold: require("../assets/fonts/Outfit-Bold.ttf"),
  });

  useEffect(() => {
    if (!loaded) return;
    setTimeout(() => navigation.navigate("Home"), 2000);
  }, [loaded]);

  return (
    <View style={styles.splashContainer}>
      <LottieView
        source={require("../assets/animations/trashpoint_loading.json")}
        autoPlay
        loop
        resizeMode="center"
        style={styles.logoContainer}
      />

      <View style={styles.appNameContainer}>
        {loaded && (
          <Text style={styles.appName}>
            <Text style={styles.appNameOrange}>Trash</Text>
            <Text style={styles.appNameGreen}>Point</Text>
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#EAF4D1",
  },
  logoContainer: {
    height: "30%",
    marginVertical: -35,
  },
  appNameContainer: {
    alignSelf: "center",
    alignItems: "center",
    height: 220,
  },
  appName: {
    fontSize: 50,
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
