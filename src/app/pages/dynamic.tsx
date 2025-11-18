import DynamicListItem from "@/components/DynamicListItem";
import ThemedView from "@/components/Elements/ThemedView";
import ListFooter from "@/components/ListFooter";
import Touchable from "@/components/Touchable";
import styles, {
  HEADER_COLLAPSED_HEIGHT,
  HEADER_EXPANDED_HEIGHT,
  INFO_HIDE_DISTANCE,
  SCROLL_DISTANCE,
} from "@/styles/dynamic";
import { deviceHeightDp } from "@/utils/appUtils";
import { FlashList } from "@shopify/flash-list";

import { Image } from "expo-image";
import { useCallback, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function DynamicPage() {
  const [showBack] = useState<boolean>(true);
  const [descHeight, setDescHeight] = useState<number>(0);
  const [refreshing, setRefreshing] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const scrollY = useSharedValue(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setShowFooter(false);
    setTimeout(() => {
      setRefreshing(false);
      setShowFooter(true);
    }, 1500); // 模拟网络请求
  }, []);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  const headerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, SCROLL_DISTANCE],
      [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      "clamp",
    );
    return { height };
  });

  const listStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, SCROLL_DISTANCE],
      [deviceHeightDp - HEADER_EXPANDED_HEIGHT + 20, deviceHeightDp - HEADER_COLLAPSED_HEIGHT + 20],
      "clamp",
    );
    return { height };
  });

  const avatarStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, SCROLL_DISTANCE], [1, 0.5], "clamp");
    const translateY = interpolate(
      scrollY.value,
      [0, SCROLL_DISTANCE],
      [0, descHeight * 2 + 76],
      "clamp",
    );
    const translateX = interpolate(
      scrollY.value,
      [0, SCROLL_DISTANCE],
      [0, showBack ? 24 : -32],
      "clamp",
    );
    return {
      transform: [{ scale }, { translateY }, { translateX }],
    };
  });

  const nameStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, SCROLL_DISTANCE],
      [0, descHeight + 48],
      "clamp",
    );
    const translateX = interpolate(
      scrollY.value,
      [0, SCROLL_DISTANCE],
      [0, showBack ? -4 : -32],
      "clamp",
    );
    return {
      transform: [{ translateY }, { translateX }],
    };
  });

  const fadeOutInfo = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, INFO_HIDE_DISTANCE], [1, 0], "clamp");
    return { opacity };
  });

  const fadeInBack = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [INFO_HIDE_DISTANCE, SCROLL_DISTANCE],
      [0, 1],
      "clamp",
    );
    const translateY = interpolate(
      scrollY.value,
      [0, SCROLL_DISTANCE],
      [0, descHeight + 36],
      "clamp",
    );
    return { opacity, transform: [{ translateY }] };
  });

  return (
    <ThemedView style={styles.dynamic}>
      {/* Header */}
      <Animated.View style={[styles.header, headerStyle]}>
        <Image
          source={require("~/assets/dynamic/headerBg.jpg")}
          style={styles.headerImage}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
        <View style={[styles.headerInfo]}>
          {/* header top */}
          <View style={styles.headerSetting}>
            <Touchable onPress={() => {}}>
              <Image
                source={require("~/assets/dynamic/setting.png")}
                style={styles.settingImg}
                contentFit="cover"
                cachePolicy="memory-disk"
              />
            </Touchable>
          </View>
          <Animated.View style={[styles.headerInfoTop]}>
            {showBack ? (
              <Animated.Image
                source={require("~/assets/dynamic/back.png")}
                style={[styles.backImage, fadeInBack]}
              />
            ) : null}
            <Animated.Image
              source={require("~/assets/dynamic/avatar.png")}
              style={[styles.avatarImage, avatarStyle]}
            />
            <Animated.View style={[styles.headerInfoTopContent, nameStyle]}>
              <Text style={[styles.infoName]} numberOfLines={1} ellipsizeMode="tail">
                张三名字可以去的特别长，但是会省略
              </Text>
              <Animated.View style={[styles.infoTag, fadeOutInfo]}>
                <Text style={styles.infoTagText} numberOfLines={1} ellipsizeMode="tail">
                  @Rinrin__12345678910
                </Text>
                <Text style={styles.infoTagText}>IP: 北京</Text>
              </Animated.View>
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={[styles.headerInfoBottom, fadeOutInfo]}
            onLayout={(e) => setDescHeight(e.nativeEvent.layout.height)}
          >
            <Text style={styles.headerInfoDesc} numberOfLines={3} ellipsizeMode="tail">
              我现在会喜欢慢一点的关系，两个人花时间聊天，确定某一天一起出来看一场电影，吃饭，了解各自喜欢吃什么，想让“喜欢”这两个字好几次地想要说出口，再咽回去。我现在会喜欢慢一点的关系，两个人花时间聊天，确定某一天一起出来看一场电影，吃饭，了解各自喜欢吃什么，想让“喜欢”这两个字好几次地想要说出口，再咽回去。
            </Text>
            <Touchable style={styles.headerInfoBtn} onPress={() => {}}>
              <Text style={styles.headerInfoBtnText}>编辑资料</Text>
            </Touchable>
          </Animated.View>
        </View>
      </Animated.View>

      {/* FlashList */}
      <Animated.View style={[styles.listContainer, listStyle]}>
        <FlashList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <DynamicListItem data={item} />}
          scrollEventThrottle={16}
          onScroll={onScroll}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ListFooterComponent={showFooter ? <ListFooter text="没有更多了..." /> : null}
        />
      </Animated.View>
    </ThemedView>
  );
}
