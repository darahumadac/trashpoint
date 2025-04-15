import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";

export default function Splash() {
  const [loaded] = useFonts({
    "ChelseaMarket": require("../assets/fonts/ChelseaMarket-Regular.ttf"),
  });
  return (
    <View style={styles.splashContainer}>
      <LottieView
        source={require("../assets/trashpoint-splash-2.json")}
        autoPlay
        loop
        resizeMode="cover"
        style={styles.logoContainer}
        // onAnimationFinish={}
      />
      <View style={styles.appNameContainer}>
        {loaded && <Text style={styles.appName}>TrashPoint</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appNameContainer: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "flex-end",
    height: 250,
  },
  appName: {
    fontSize: 60,
    color: "#5a8226",
    fontFamily: "ChelseaMarket"
  },
  logoContainer: { position: "relative", height: "50%", top: "-10%" },
  splashContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#d8ebc0",
  },
});
