import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";

const AppView: FC<PropsWithChildren> = ({ children }) => {
  return <View className="flex-1">{children}</View>;
};

export default AppView;
