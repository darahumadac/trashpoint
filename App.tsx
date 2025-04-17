import "./global.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/Home";
import Splash from "./app/Splash";
import TransactionHistory from "./app/TransactionHistory";
import Profile from "./app/Profile";
import ScanQR from "./app/ScanQR";
import ReserveSlot from "./app/ReserveSlot";
import ShowQR from "./app/ShowQR";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="Home"
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ScanQR" component={ScanQR} />
        <Stack.Screen name="ReserveSlot" component={ReserveSlot} />
        <Stack.Screen name="ShowQR" component={ShowQR} />
        <Stack.Screen
          name="TransactionHistory"
          component={TransactionHistory}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
