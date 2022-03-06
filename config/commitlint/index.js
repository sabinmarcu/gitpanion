module.exports = {
  extends: [ 
		"@commitlint/config-conventional", 
	],
	plugins: [
		"scope-empty-exceptions",
		"workspace-scopes"
	],
  rules: {
    // Override this rule to explicitly state your own (scope)s.
    "scope-empty": [
      2, // Throw error when (scope) is not one of these values.
      "always",
      [
        // This is the only default value baked into the config.
        "chore",
      ],
    ],
		"scope-enum": [
			2,
			'always',
			['root']
		]
  },
};