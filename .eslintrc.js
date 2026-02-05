module.exports = {
  extends: ["expo", "prettier"], // 'expo' já cuida do React e TypeScript
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error", // Mostra erros de formatação como erro de lint
    "no-console": "warn", // Avisa se você deixar console.log no código
  },
};
