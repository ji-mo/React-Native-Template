import { Image } from "expo-image";
import { Platform, StyleSheet, View } from "react-native";

import ThemedText from "@/components/Elements/ThemedText";
import ThemedView from "@/components/Elements/ThemedView";
import { HelloWave } from "@/components/hello-wave";
import CommonModal from "@/components/Modal";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { RootState } from "@/store";
import { setId } from "@/store/appStore";
import { p2d } from "@/utils/appUtils";
import { useState } from "react";
import { Button, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.appStore.id);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("~/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText>app/(tabs)/index.tsx</ThemedText> to see changes. Press{" "}
          <ThemedText>
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>store value: {id}</ThemedText>
        <Button
          mode="contained"
          onPress={() => {
            dispatch(setId(10));
          }}
          style={{ marginTop: 20 }}
        >
          设置Store Value
        </Button>
      </ThemedView>
      <Button
        mode="contained"
        onPress={() => {
          // router.push("/modal");
          setVisible(true);
        }}
        style={{ marginTop: 20 }}
      >
        打开全局 Modal
      </Button>
      <CommonModal
        visible={visible}
        onDismiss={() => setVisible(false)}
        title="通用 Modal 示例"
        footer={
          <View style={styles.modalFooter}>
            <Button mode="contained" style={styles.modalFooterBtn}>
              Cancel
            </Button>
            <Button mode="contained" style={styles.modalFooterBtn}>
              Confirm
            </Button>
          </View>
        }
      >
        <View>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
          <Text variant="labelLarge">Label Small</Text>
        </View>
      </CommonModal>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalFooterBtn: {
    paddingHorizontal: p2d(20),
    paddingVertical: p2d(4),
    borderRadius: p2d(24),
  },
});
