import { Stack } from "expo-router";

export default function PagesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="dynamic" options={{ title: "Dynamic" }} />
    </Stack>
  );
}
