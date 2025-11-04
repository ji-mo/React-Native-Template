import ThemedText from "@/components/Elements/ThemedText";
import ThemedView from "@/components/Elements/ThemedView";
import Touchable from "@/components/Touchable";
import { p2d } from "@/utils/appUtils";
import React from "react";
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Icon, Modal, ModalProps, Portal } from "react-native-paper";

interface ICommonModalProps<T = void> extends ModalProps {
  title?: string | React.ReactNode;
  footer?: React.ReactNode;
  showClose?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  onConfirm?: (data: T) => void | Promise<void>;
  showCloseButton?: boolean;
}

const CommonModal: React.FC<ICommonModalProps> = ({
  visible,
  onConfirm,
  onDismiss,
  children,
  title,
  footer,
  showClose = true,
  contentStyle,
  showCloseButton = true,
}) => {
  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
        <ThemedView style={[styles.content, contentStyle]}>
          {typeof title === "string"
            ? !!title && (
                <View style={[styles.title]}>
                  <ThemedText style={styles.titleText}>{title}</ThemedText>
                </View>
              )
            : title}
          {showClose && (
            <Touchable onPress={onDismiss} style={styles.closeBtn}>
              <Icon source="window-close" color="#999" size={p2d(30)} />
            </Touchable>
          )}
          <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
          {footer}
        </ThemedView>
      </Modal>
    </Portal>
  );
};

export default CommonModal;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: p2d(24),
  },
  content: {
    gap: p2d(16),
    paddingVertical: p2d(24),
    paddingHorizontal: p2d(16),
    maxHeight: p2d(540),
    borderRadius: p2d(16),
  },
  title: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    width: "72%",
    fontSize: p2d(18),
    fontWeight: "bold",
    textAlign: "center",
  },
  closeBtn: {
    position: "absolute",
    top: p2d(12),
    right: p2d(12),
  },
  body: {
    flex: 1,
  },
});
