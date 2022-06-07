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
                            screens: "./navigation/screens",
                            stacks:  "./navigation/stacks",
                            components: "./components",
                            contexts: "./utils/contexts",
                            reducers: "./utils/reducers"
                        },
                        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
                    }
                ],
            ]
      };
};
