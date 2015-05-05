/*({
    mainConfigFile : "js/main.js",
    baseUrl : "js",
    name: "main",
    out: "dist/main.js",
    removeCombined: true,
    findNestedDependencies: true
})*/

({
    mainConfigFile : "js/main.js",
    baseUrl: "js",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "dist",
    modules: [
        {
            name: "main",
            exclude: [
				"jquery",
		 		"jquery.bootstrap",
				"jqueryui",
				"underscore",
				"backbone",
				"backbone.marionette",
				"backbone.localStorage",
				"backbone.validation",
				"moment",
				"text",
				"i18n",
				"polyglot",	
				"html2canvas",
				"backbone.modal",
				"backbone.marionette.modals",
				"backgrid",
				"parse",
            ]
        }
    ]
})