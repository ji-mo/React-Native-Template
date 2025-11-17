import ThemedView from "@/components/Elements/ThemedView";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import ToggleIcon from "../ToggleIcon";
import styles from "./styles";

export interface IDynamicListItemProps {
  data?: number;
}

export default function DynamicListItem({ data }: IDynamicListItemProps) {
  return (
    <ThemedView style={styles.item}>
      <View style={styles.left}>
        <Text style={styles.leftDay}>27</Text>
        <Text style={styles.leftMonth}>十二月</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.rightTime}>3 分钟前</Text>
        <Text style={styles.rightDesc}>
          {data}
          这是动态的描述呀，多加点文字让描述更长，怎么？认不出我了吗？这是动态的描述呀，多加点文字让描述更长，怎么？认不出我了吗？
        </Text>
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
            <Text style={styles.rightBtnText}>1234</Text>
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
            <Text style={styles.rightBtnText}>1234</Text>
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
            <Text style={styles.rightBtnText}>1234</Text>
          </View>
        </View>
      </View>
    </ThemedView>
  );
}
