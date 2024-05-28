module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended", "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
           
            "parserOptions": {
                "sourceType": "script"
            },
            files: ['src/components/ui/**/*.tsx'],
            rules: {
              'react/prop-types': 'off', 
                'react/react-in-jsx-scope': 'off',
                "@typescript-eslint/no-explicit-any": "off",
            },
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "off",
    },
    settings:{
        react:{
            version:"17.0.2"
        }
    }
}
