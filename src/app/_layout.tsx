import { store } from "@/store";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";

import { useMemo } from "react";
import { useColorScheme } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // 自定义主题
  const paperTheme = useMemo(() => {
    console.log("colorScheme----", colorScheme);
    return colorScheme === "dark"
      ? {
          ...MD3DarkTheme,
          // colors: { ...MD3DarkTheme.colors, primary: '#BB86FC' }, // 自定义例子
        }
      : {
          ...MD3LightTheme,
          // colors: { ...MD3LightTheme.colors, primary: '#6200ee' },
        };
  }, [colorScheme]);

  return (
    <SafeAreaProvider>
      {/* 数据层 */}
      <ReduxProvider store={store}>
        {/* 组件层 */}
        <PaperProvider theme={paperTheme}>
          <StatusBar style="auto" />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </PaperProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
