module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!lodash-es)"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
    "\\.css$": "identity-obj-proxy",
  },
};
