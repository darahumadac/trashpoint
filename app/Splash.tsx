import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";
import AppName from "./components/AppName";

export default function Splash({ navigation }: any) {
  const [loaded] = useFonts({
    ChelseaMarket: require("../assets/fonts/ChelseaMarket-Regular.ttf"),
    Outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    OutfitBold: require("../assets/fonts/Outfit-Bold.ttf"),
  });

  useEffect(() => {
    if (!loaded) return;
    setTimeout(() => navigation.navigate("Login"), 2000);
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

      {loaded && <AppName/>}
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
});
