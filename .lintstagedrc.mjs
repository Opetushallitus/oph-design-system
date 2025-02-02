const eslintCommand = 'eslint --fix --max-warnings=0 --no-warn-ignored';
const prettierCommand = 'prettier --write -u';

const config = {
  '**/*.{js,mjs,cjs,jsx,ts,tsx}': [eslintCommand, prettierCommand],
  '!**/*.{js,mjs,cjs,jsx,ts,tsx}': prettierCommand,
};

export default config;
