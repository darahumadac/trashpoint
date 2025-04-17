import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import { Link, useFocusEffect } from "@react-navigation/native";
import QuickLink, { QuickLinkGroup } from "./components/QuickLink";
import AppView from "./components/AppView";

export default function Home({ navigation }: any) {
  const confirmExit = useCallback(() => {
    Alert.alert(
      "Exit app",
      "Are you sure you want to exit?",
      [
        { text: "Cancel", onPress: () => {}, style: "cancel" },
        { text: "Yes", onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );
    return true;
  }, []);

  useFocusEffect(() => {
    const backHander = BackHandler.addEventListener(
      "hardwareBackPress",
      confirmExit
    );
    return () => backHander.remove();
  });

  return (
    <AppView>
      {/* <View className="bg-black" /> */}
      <View className="pt-5 h-1/6 secondary-bg items-center justify-center relative">
        <View className="w-4/5 flex flex-row justify-start items-center">
          <View className="mr-5">
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                className="rounded-full size-[60px] border border-gray-400 border-solid"
                source={{ uri: "https://i.pravatar.cc/150?img=6" }}
              />
            </TouchableOpacity>
          </View>
          <Text className="tracking-wider outfitRegular dark-text">
            <Text className="text-m">Welcome back,{"\n"}</Text>
            <Text className="text-2xl outfitBold">Samuel Lim!</Text>
          </Text>
        </View>
        {/* <View className="h-auto w-4/5 primary-bg p-5 rounded-full absolute -bottom-5">
          <Text className="text-2xl font-bold text-white">Hello there</Text>
        </View> */}
      </View>
      <View className="h-full items-center w-full">
        {/* points earned */}
        <View
          style={styles.shadow}
          className="h-auto w-4/5 max-w-[90%] rounded-lg my-5 p-5 flex flex-row flex-wrap justify-around items-center"
        >
          <Image
            source={require("../assets/icons/coins-money-svgrepo-com.png")}
            style={{ marginBottom: 10, height: 80, width: 80 }}
          />

          <View className="flex flex-col items-start items-center">
            <Text className="text-l outfitRegular dark-text">Total Points</Text>
            <Text className="mt-2 mb-1 text-3xl outfitBold">1,000</Text>
            <Text className="mb-2 text-sm outfitRegular muted-text">
              (&#8776; &#8369;100.00)
            </Text>
            <Link
              style={{ color: "#6f9460", fontSize: 12 }}
              screen="TransactionHistory"
              params={{ id: "UI123" }}
            >
              See transaction history
            </Link>
          </View>
        </View>
        {/* quick links for user action */}
        <QuickLinkGroup title="Quick Links" navigation={navigation}>
          <QuickLink text="Scan QR" icon="expand" screen="ScanQR" />
          <QuickLink text="Book Slot" icon="calendar" screen="ReserveSlot" />
          <QuickLink text="Your QR" icon="qrcode" screen="ShowQR" />
        </QuickLinkGroup>
      </View>
    </AppView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    boxShadow: "3px 5px 10px 1px #a9a9a9",
    // #bdb8b8
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     // alignItems: "center"
//   },
//   headboard: {
//     height: "20%",
//     backgroundColor: "#8DC71E",
//   },
// });
