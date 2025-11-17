import { StyleSheet } from "react-native";

import ThemedView from "@/components/Elements/ThemedView";
import { router } from "expo-router";
import { Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.home}>
      <Button mode="contained" onPress={() => router.push("/pages/dynamic")}>
        Jump DynamicList
      </Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
