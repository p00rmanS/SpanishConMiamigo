import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
export default [
 {ignores:['dist/**','node_modules/**','qa/**']},
 {files:['src/**/*.{js,jsx}'],...js.configs.recommended,languageOptions:{ecmaVersion:'latest',sourceType:'module',globals:globals.browser,parserOptions:{ecmaFeatures:{jsx:true}}},plugins:{react},rules:{...js.configs.recommended.rules,'react/jsx-uses-vars':'error','no-unused-vars':['error',{argsIgnorePattern:'^_'}]}}
];
