export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('**/*.css');
    eleventyConfig.addPassthroughCopy('**/*.ttf');
    eleventyConfig.addFilter('log', any => console.log(any));
    eleventyConfig.addFilter('keys', obj => Object.keys(obj));
}