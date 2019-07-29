module.exports = function(config) {

	config.addPassthroughCopy("./site/images");
	config.addPassthroughCopy("./admin");

	config.addCollection("posts", collection => {
		return collection.getFilteredByGlob("src/site/posts/*.md");
	});

	return {
		dir: {
			input: "./site",
			output: "dist",
			includes: "templates",
			data: "_data"
		},
		templateFormats: ["html", "md", "css"],
		htmlTemplateEngine: "liquid",
		markdownTemplateEngine: "liquid"
	};
};
