module.exports = function(api) {
  api.cache(true);
  return {
        presets: ['babel-preset-expo'],
        plugins: 
            [
                ['react-native-paper/babel'],
                [
                    'module-resolver',
                    {
                        alias: {
                            screens: "./screens",
                            screenStacks: "./screenStacks",
                            components: "./components",
                            contexts: "./contexts",
                            reducers: "./reducers"
                        },
                        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
                    }
                ],
            ]
      };
};
