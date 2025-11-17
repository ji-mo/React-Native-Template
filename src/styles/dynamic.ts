import { deviceWidthDp, p2d } from "@/utils/appUtils";
import { StyleSheet } from "react-native";

export const HEADER_EXPANDED_HEIGHT = 320; // 初始高度
export const HEADER_COLLAPSED_HEIGHT = 120; // 收起高度
export const INFO_HIDE_DISTANCE = 60; // 收起高度
export const INFO_SHOW_DISTANCE = 90; // 收起高度
export const SCROLL_DISTANCE = HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT; // 距离

export default StyleSheet.create({
  dynamic: {
    position: "relative",
    width: deviceWidthDp,
    flex: 1,
  },
  // header UI
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    zIndex: 9,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  headerSetting: {
    padding: p2d(12),
    alignItems: "flex-end",
  },
  settingImg: {
    width: p2d(32),
    height: p2d(32),
  },
  headerInfo: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9,
    padding: p2d(16),
    gap: p2d(12),
  },
  headerInfoTop: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    gap: p2d(8),
  },
  backImage: {
    position: "absolute",
    left: 0,
    zIndex: 10,
    width: p2d(20),
    height: p2d(20),
  },
  avatarImage: {
    width: p2d(64),
    height: p2d(64),
    borderRadius: p2d(32),
    borderWidth: p2d(0.5),
    borderColor: "#0000001A",
  },
  headerInfoTopContent: {
    flex: 1,
    gap: p2d(4),
  },
  infoName: {
    height: p2d(24),
    lineHeight: p2d(24),
    fontSize: p2d(18),
    fontWeight: "bold",
    color: "#fff",
  },
  infoTag: {
    flexDirection: "row",
    gap: p2d(13),
  },
  infoTagText: {
    maxWidth: "40%",
    height: p2d(16),
    lineHeight: p2d(16),
    fontSize: p2d(12),
    color: "#fff",
  },
  headerInfoBottom: {
    gap: p2d(16),
  },
  headerInfoDesc: {
    lineHeight: p2d(16),
    fontSize: p2d(12),
    color: "#fff",
  },
  headerInfoBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: p2d(32),
    borderWidth: p2d(1),
    borderColor: "#FFFFFF",
    borderRadius: p2d(10),
  },
  headerInfoBtnText: {
    fontSize: p2d(15),
    fontWeight: "bold",
    color: "#fff",
  },

  listContainer: {
    flex: 1,
  },
});
