module.exports = function(config) {

	config.addCollection('posts', collection => {
		return collection.getFilteredByGlob('src/site/posts/*.md');
	});

	return {
		dir: {
			input: ".",
			output: "dist",
			includes: "templates",
			data: "_data"
		},
		templateFormats: ["html", "md", "css", "yml"],
		htmlTemplateEngine: "liquid",
		markdownTemplateEngine: "liquid"
	};
}