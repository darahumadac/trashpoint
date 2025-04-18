import React from "react";
import { View, Text, Button } from "react-native";
import AppView from "./components/AppView";
import AppName from "./components/AppName";

export default function Login() {
  return (
    <AppView statusBarColor="#D6EAA4">
      {/* Header */}
      <View className="h-2/6 secondary-bg items-center justify-center relative">
        <AppName height="80%" fontSize={30} />
      </View>
      <View className="absolute top-[18%] rounded-[3rem] w-screen bg-white h-full">
        <View className="relative">
          <Text>Log in</Text>
        </View>
      </View>
    </AppView>
  );
}
