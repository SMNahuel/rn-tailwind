module.exports = function (api) {
  api.cache(true);
  let plugins = [];

  plugins.push("react-native-worklets/plugin");
  plugins.push("expo-router/babel");
  plugins.push([
    "module-resolver",
    {
      root: ["./"],
      alias: {
        "@": "./",
      },
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
  ]);

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],

    plugins,
  };
};
