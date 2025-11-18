import { p2d } from "@/utils/appUtils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    padding: p2d(12),
    gap: p2d(8),
    flexDirection: "row",
    borderBottomWidth: p2d(4),
    borderBottomColor: "#FAFAFC",
  },
  left: {
    width: p2d(36),
    alignItems: "center",
  },
  leftDay: {
    height: p2d(20),
    lineHeight: p2d(20),
    fontSize: p2d(16),
    fontWeight: "bold",
    // color: "#161616",
  },
  leftMonth: {
    height: p2d(12),
    lineHeight: p2d(12),
    fontSize: p2d(10),
    fontWeight: "bold",
    // color: "#161616",
  },
  right: {
    flex: 1,
    gap: p2d(8),
  },
  rightTime: {
    height: p2d(12),
    lineHeight: p2d(12),
    fontSize: p2d(11),
    // color: "#858585",
  },
  rightDesc: {
    lineHeight: p2d(20),
    fontSize: p2d(15),
    // color: "#161616",
  },
  rightImgList: {
    flexDirection: "row",
    gap: p2d(4),
    flexWrap: "wrap",
  },
  rightImg: {
    width: p2d(94),
    height: p2d(94),
    borderRadius: p2d(4),
  },
  rightBtnList: {
    flexDirection: "row",
  },
  rightBtn: {
    paddingHorizontal: p2d(7),
    flexDirection: "row",
    alignItems: "center",
    gap: p2d(6),
    width: p2d(64),
    height: p2d(32),
    overflow: "hidden",
  },
  rightBtnText: {
    height: p2d(18),
    lineHeight: p2d(18),
    fontSize: p2d(13),
    // color: "#161616",
  },
});
