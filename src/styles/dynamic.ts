import { p2d } from "@/utils/appUtils";
import { StyleSheet } from "react-native";

export const HEADER_MAX_HEIGHT = 350; // 初始高度
export const HEADER_MIN_HEIGHT = 90; // 收起高度

export default StyleSheet.create({
  dynamic: {
    position: "relative",
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
  headerInfo: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9,
    padding: p2d(16),
    gap: p2d(16),
  },
  headerInfoTop: {
    gap: p2d(12),
  },
  headerInfoTopUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: p2d(8),
  },
  avatarImage: {
    width: p2d(64),
    height: p2d(64),
    borderRadius: p2d(32),
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
  headerInfoUserDesc: {
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
    borderTopLeftRadius: p2d(16),
    overflow: "hidden",
    flex: 1,
  },

  profileContainer: {
    marginTop: 200,
    padding: 20,
  },
  name: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    color: "#eee",
    marginTop: 6,
  },
  compactBar: {
    position: "absolute",
    bottom: 0,
    height: HEADER_MIN_HEIGHT,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(255,255,255,0.95)",
  },
  avatarSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  smallName: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: "600",
  },
  postItem: {
    height: 120,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
