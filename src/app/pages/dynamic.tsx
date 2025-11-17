import ThemedView from "@/components/Elements/ThemedView";
import Touchable from "@/components/Touchable";
import styles, { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT } from "@/styles/dynamic";

import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function DynamicPage() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      Extrapolation.CLAMP,
    );
    return { height };
  });

  const infoOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, HEADER_MAX_HEIGHT - 150], [1, 0], Extrapolation.CLAMP),
  }));

  const compactBarOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [50, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <ThemedView style={styles.dynamic}>
      {/* Header */}
      <Animated.View style={[styles.header, headerStyle]}>
        <Image
          source={require("~/assets/dynamic/headerBg.jpg")}
          style={styles.headerImage}
          contentFit="cover"
        />
        <View style={[styles.headerInfo]}>
          <View style={styles.headerInfoTop}>
            <View style={styles.headerInfoTopUser}>
              <Image
                source={require("~/assets/dynamic/avatar.png")}
                style={styles.avatarImage}
                contentFit="cover"
              />
              <View style={styles.headerInfoTopContent}>
                <Text style={styles.infoName} numberOfLines={1} ellipsizeMode="tail">
                  张三名字可以去的特别长，但是会省略
                </Text>
                <View style={styles.infoTag}>
                  <Text style={styles.infoTagText} numberOfLines={1} ellipsizeMode="tail">
                    @Rinrin__12345678910
                  </Text>
                  <Text style={styles.infoTagText}>IP: 北京</Text>
                </View>
              </View>
            </View>

            <Text style={styles.headerInfoUserDesc} numberOfLines={3} ellipsizeMode="tail">
              我现在会喜欢慢一点的关系，两个人花时间聊天，确定某一天一起出来看一场电影，吃饭，了解各自喜欢吃什么，想让“喜欢”这两个字好几次地想要说出口，再咽回去。我现在会喜欢慢一点的关系，两个人花时间聊天，确定某一天一起出来看一场电影，吃饭，了解各自喜欢吃什么，想让“喜欢”这两个字好几次地想要说出口，再咽回去。
            </Text>
          </View>

          <Touchable style={styles.headerInfoBtn}>
            <Text style={styles.headerInfoBtnText}>编辑资料</Text>
          </Touchable>
        </View>

        {/* 收起后显示的小头像栏 */}
        {/* <Animated.View style={[styles.compactBar, compactBarOpacity]}>
          <Image
            source={{ uri: "https://placekitten.com/200" }}
            style={styles.avatarSmall}
            contentFit="cover"
          />
          <Text style={styles.smallName}>张三</Text>
        </Animated.View> */}
      </Animated.View>

      {/* FlashList */}
      <View style={styles.listContainer}>
        <FlashList
          data={Array.from({ length: 40 })}
          // estimatedItemSize={100}
          renderItem={({ index }) => (
            <View key={index} style={styles.postItem}>
              <Text>朋友圈动态 {index + 1}</Text>
            </View>
          )}
          // contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
        />
      </View>
    </ThemedView>
  );
}
