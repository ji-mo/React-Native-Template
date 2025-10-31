module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ["./"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            '~': './',      // 对应 "~/*": ["./*"]
            '@': './src',   // 对应 "@/*": ["src/*"]
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
