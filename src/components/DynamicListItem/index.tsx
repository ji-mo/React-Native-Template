import ThemedText from "@/components/Elements/ThemedText";
import ThemedView from "@/components/Elements/ThemedView";
import ToggleIcon from "@/components/ToggleIcon";
import { Image } from "expo-image";
import { memo } from "react";
import { View } from "react-native";
import styles from "./styles";

export interface IDynamicListItemProps {
  data?: number;
}

export default memo(function DynamicListItem({ data }: IDynamicListItemProps) {
  return (
    <ThemedView style={styles.item}>
      <View style={styles.left}>
        <ThemedText style={styles.leftDay} lightColor="#161616">
          27
        </ThemedText>
        <ThemedText style={styles.leftMonth} lightColor="#161616">
          十二月
        </ThemedText>
      </View>
      <View style={styles.right}>
        <ThemedText style={styles.rightTime} lightColor="#858585">
          3 分钟前
        </ThemedText>
        <ThemedText style={styles.rightDesc} lightColor="#161616">
          {data}
          这是动态的描述呀，多加点文字让描述更长，怎么？认不出我了吗？这是动态的描述呀，多加点文字让描述更长，怎么？认不出我了吗？
        </ThemedText>
        <View style={styles.rightImgList}>
          <Image
            source={require("~/assets/dynamic/headerBg.jpg")}
            style={styles.rightImg}
            contentFit="cover"
          />
          <Image
            source={require("~/assets/dynamic/headerBg.jpg")}
            style={styles.rightImg}
            contentFit="cover"
          />
          <Image
            source={require("~/assets/dynamic/headerBg.jpg")}
            style={styles.rightImg}
            contentFit="cover"
          />
          <Image
            source={require("~/assets/dynamic/headerBg.jpg")}
            style={styles.rightImg}
            contentFit="cover"
          />
          <Image
            source={require("~/assets/dynamic/headerBg.jpg")}
            style={styles.rightImg}
            contentFit="cover"
          />
          <Image
            source={require("~/assets/dynamic/headerBg.jpg")}
            style={styles.rightImg}
            contentFit="cover"
          />
          <Image
            source={require("~/assets/dynamic/headerBg.jpg")}
            style={styles.rightImg}
            contentFit="cover"
          />
        </View>
        <View style={styles.rightBtnList}>
          <View style={styles.rightBtn}>
            <ToggleIcon
              iconSource="heart-outline"
              selectedIconSource="heart"
              iconColor="#858585"
              selectedIconColor="red"
              defaultSelected={false}
              callBack={() => {}}
            />
            <ThemedText style={styles.rightBtnText} lightColor="#161616">
              1234
            </ThemedText>
          </View>
          <View style={styles.rightBtn}>
            <ToggleIcon
              iconSource="comment-processing-outline"
              selectedIconSource="comment-processing"
              iconColor="#858585"
              selectedIconColor="red"
              defaultSelected={false}
              callBack={() => {}}
            />
            <ThemedText style={styles.rightBtnText} lightColor="#161616">
              1234
            </ThemedText>
          </View>
          <View style={styles.rightBtn}>
            <ToggleIcon
              iconSource="export-variant"
              selectedIconSource="export-variant"
              iconColor="#858585"
              selectedIconColor="red"
              defaultSelected={false}
              callBack={() => {}}
            />
            <ThemedText style={styles.rightBtnText} lightColor="#161616">
              1234
            </ThemedText>
          </View>
        </View>
      </View>
    </ThemedView>
  );
});
