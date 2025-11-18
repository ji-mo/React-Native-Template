import { StyleSheet } from "react-native";

import ThemedText from "@/components/Elements/ThemedText";
import ThemedView from "@/components/Elements/ThemedView";
import { p2d } from "@/utils/appUtils";

export interface IListFooterProps {
  text: string;
}

export default function ListFooter({ text }: IListFooterProps) {
  return (
    <ThemedView style={styles.footer}>
      <ThemedText style={styles.text} lightColor="#858585">
        {text}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingTop: p2d(16),
    paddingBottom: p2d(24),
    alignItems: "center",
  },
  text: {
    fontSize: p2d(14),
  },
});
