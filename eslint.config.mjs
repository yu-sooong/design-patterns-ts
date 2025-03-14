import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },

  {
    languageOptions: {
      globals: globals.node,  // ✅ 讓 ESLint 正確認識 Node.js 環境
      sourceType: "module",   // ✅ 確保 ESLint 支援 ESM
    }
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,

  {
    rules: {
      "no-undef": "off",  // ✅ 避免 `module.exports` 報錯
      "no-useless-escape": "off", // ✅ 修正 Jest 正則表達式報錯
    },
  },
];
