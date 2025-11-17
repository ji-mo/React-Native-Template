import { StyleSheet } from "react-native";

import ThemedText from "@/components/Elements/ThemedText";
import ThemedView from "@/components/Elements/ThemedView";
import { Fonts } from "@/constants/theme";

export default function SettingScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText
        style={{
          fontFamily: Fonts.rounded,
        }}
      >
        Setting
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
