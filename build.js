({
    mainConfigFile : "js/main.js",
    baseUrl: "js",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "dist",
    //optimize: "none",
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