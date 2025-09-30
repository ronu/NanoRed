export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.addPassthroughCopy('media');
    eleventyConfig.addFilter('log', any => console.log(any));
    eleventyConfig.addFilter('keys', obj => Object.keys(obj));
}