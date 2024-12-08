import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	pluginReact.configs.flat.recommended,
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		rules: {
			semi: "error",
			"no-multi-spaces": "error",
			"object-curly-spacing": ["error", "always"],
			quotes: [
				"error",
				"double",
			],
			"comma-dangle": [
				"error",
				"always-multiline",
			],
			"react/react-in-jsx-scope": 0,
			"@typescript-eslint/ban-ts-comment": "error",
		},
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
			globals: globals.browser,
		},
	},
);
