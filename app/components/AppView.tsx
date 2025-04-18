import React, { FC, PropsWithChildren } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar as NativeStatusBar,
} from "react-native";
import { StatusBar } from "expo-status-bar";

interface AppViewProps{
    statusBarColor?: string
}

const AppView: FC<PropsWithChildren<AppViewProps>> = ({ statusBarColor = "black", children }) => {
  return (
    <SafeAreaView className="flex-1" style={styles.safeArea}>
      <StatusBar style={statusBarColor != "black"? "dark" : "light"} translucent backgroundColor={statusBarColor}/>
      {children}
    </SafeAreaView>
  );
};

export default AppView;

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
});
