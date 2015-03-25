({
    mainConfigFile : "js/main.js",
    baseUrl : "js",
    name: "main",
    out: "dist/main.js",
    removeCombined: true,
    findNestedDependencies: true
})

/*({
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
				"marionette",
				"backbone.localStorage",
				"moment",
				"backbone.validation",
				"text",
				"html2canvas",
				"backbone.modal",
            ]
        }
    ]
})*/