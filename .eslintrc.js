module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    env: {
        node: true,
        browser: true,
        mocha: true,
    },
    parserOptions: {
        ecmaVersion: 2018, // Allow the parsing of modern ECMAScript features
        sourceType: "module", // Allow the use of imports
    },
    rules: {
        // We don't consider those rules helpful
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": ["error", {vars: "all", argsIgnorePattern: "^_"}],
        // The following rules should be enabled, but aren't yet due to legacy code which still needs
        // to be adapted
        "@typescript-eslint/no-explicit-any": "off",
        "no-prototype-builtins": "off",
    },
    overrides: [
        {
            files: ["**/*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": 0,
            },
        },
    ],
};
