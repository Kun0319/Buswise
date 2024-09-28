module.exports = {
	root: true,
	env : {
		browser: true,
		node   : true,
		es6    : true,
	},
	extends        : ["eslint:recommended"],
	"parserOptions": {
		"sourceType": "module"
	},
	"rules": {
		"prefer-arrow-callback": "error",
		// Layout & Formatting
		"array-bracket-newline": "error",
		"array-element-newline": [
			"error",
			{ multiline: true, minItems: 0 }
		],
		"arrow-parens": [
			"error",
			"as-needed"
		],
		"arrow-spacing": "error",
		"block-spacing": "error",
		"brace-style"  : [
			"error",
			"1tbs",
			{ allowSingleLine: true }
		],
		"comma-dangle": [
			"error",
			"only-multiline"
		],
		"comma-spacing": [
			"error",
			{ before: false, after: true }
		],
		"comma-style": [
			"error",
			"last"
		],
		"computed-property-spacing": [
			"error",
			"never",
			{ enforceForClassMembers: true }
		],
		"dot-location": [
			"error",
			"property"
		],
		"eol-last": [
			"error",
			"always"
		],
		"func-call-spacing": [
			"error",
			"never"
		],
		"function-call-argument-newline": [
			"error",
			"never"
		],
		"function-paren-newline": [
			"error",
			"multiline"
		],
		"generator-star-spacing": [
			"error",
			{ before: true, after: false }
		],
		"implicit-arrow-linebreak": [
			"error",
			"beside"
		],
		"jsx-quotes": [
			"error",
			"prefer-double"
		],
		"key-spacing": [
			"error",
			{ align: "colon" }
		],
		"keyword-spacing": [
			"error",
			{ before: true, after: true }
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-between-class-members": [
			"error",
			"always"
		],
		// 'max-len': [
		//     'error',
		//     { code: 120 }
		// ],
		"max-statements-per-line": "error",
		"multiline-ternary"      : [
			"error",
			"always-multiline"
		],
		"new-parens"     : "error",
		"no-multi-spaces": [
			"error",
			{ exceptions: { ImportDeclaration: true } }
		],
		"no-multiple-empty-lines": "error",
		"no-tabs"                : [
			"error",
			{ allowIndentationTabs: true }
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" }
		],
		'vue/valid-v-slot': [
			'error',
			{ allowModifiers: true }
		],
	},
	globals: {
		defineProps          : "readonly",
		defineEmits          : "readonly",
		defineExpose         : "readonly",
		withDefaults         : "readonly",
		ga                   : "readonly", // Google Analytics
		cordova              : "readonly",
		__statics            : "readonly",
		__QUASAR_SSR__       : "readonly",
		__QUASAR_SSR_SERVER__: "readonly",
		__QUASAR_SSR_CLIENT__: "readonly",
		__QUASAR_SSR_PWA__   : "readonly",
		process              : "readonly",
		Capacitor            : "readonly",
		chrome               : "readonly",
	},
	overrides: [
		{
			files: ["*.js"],
			rules: {
				// Layout & Formatting
				indent: [
					"error",
					4,
					{
						SwitchCase         : 1,
						FunctionDeclaration: { parameters: "first" },
						CallExpression     : { arguments: "first" },
						ArrayExpression    : "first",
						ObjectExpression   : "first",
						ImportDeclaration  : "first",
					},
				],
				quotes: [
					"error",
					"single"
				],
				semi: [
					"error",
					"always"
				],
				"semi-spacing": [
					"error",
					{ before: false, after: true }
				],
				"semi-style": [
					"error",
					"last"
				],
				"space-before-blocks": "error",
				"space-in-parens"    : [
					"error",
					"never"
				],
				"space-infix-ops": [
					"error",
					{ int32Hint: false }
				],
				"switch-colon-spacing": [
					"error",
					{ after: true, before: false }
				],
				"template-curly-spacing": [
					"error",
					"always"
				],
				"template-tag-spacing": [
					"error",
					"always"
				],
			},
			parserOptions: {
				ecmaVersion: "latest",
				sourceType : "module",
			},
		},
		{
			files  : ["*.vue"],
			env    : { "vue/setup-compiler-macros": true },
			extends: [
				"plugin:vue/vue3-essential",
				"plugin:vue/vue3-strongly-recommended",
				"plugin:vue/vue3-recommended",
			],
			rules: {
				quotes: [
					"error",
					"single"
				],
				"vue/no-v-for-template-key"     : "off",
				// Priority A: Essential
				"vue/multi-word-component-names": [
					"error",
					{
						ignores: ["Index"],
					},
				],
				// Priority B: Strongly Recommended
				// 'vue/first-attribute-linebreak'              : ['error', { 'singleline': 'ignore', 'multiline': 'beside' }],
				"vue/html-closing-bracket-newline": [
					"error",
					{ multiline: "never" }
				],
				"vue/html-closing-bracket-spacing": "error",
				"vue/first-attribute-linebreak"   : [
					"error",
					{ multiline: "beside" }
				],
				"vue/html-indent": [
					"error",
					4
				],
				"vue/html-self-closing": [
					"error",
					{ html: { void: "always", normal: "never" } }
				],
				"vue/max-attributes-per-line": [
					"error",
					{ multiline: { max: 1 } }
				],
				"vue/singleline-html-element-content-newline": [
					"error",
					{ ignoreWhenNoAttributes: false, ignores: ["router-link"] },
				],
				// Uncategorized
				"vue/script-indent": [
					"error",
					4,
					{ baseIndent: 1, switchCase: 1 }
				],
				'vue/valid-v-slot': [
					'error',
					{ allowModifiers: true }
				],
			},
			plugins      : ["vue"],
			parser       : "vue-eslint-parser",
			parserOptions: {
				ecmaVersion: "latest",
				sourceType : "module",
			},
		},
	],
};
