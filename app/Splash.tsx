import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";

export default function Splash() {
  const [loaded] = useFonts({
    ChelseaMarket: require("../assets/fonts/ChelseaMarket-Regular.ttf"),
  });
  return (
    <View style={styles.splashContainer}>
      <LottieView
        source={require("../assets/trashpoint-splash.json")}
        autoPlay
        // loop
        resizeMode="cover"
        style={styles.logoContainer}
      />
      <View style={styles.appNameContainer}>
        {loaded && (
          <>
            <Text style={styles.appNameGreen}>TrashPoint</Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appNameContainer: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 220,
    width: "100%",
  },
  appNameGreen: {
    fontSize: 55,
    textShadowRadius: 2,
    textShadowColor: "#788777",
    textShadowOffset: { width: 2, height: 3 },
    color: "#39d62b",
    fontFamily: "ChelseaMarket",
    letterSpacing: 4,
  },
  logoContainer: { position: "relative", height: "50%", top: "-10%" },
  splashContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#caf0c7",
  },
});
