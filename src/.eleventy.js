export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('media');
    eleventyConfig.addFilter('log', any => console.log(any));
    eleventyConfig.addFilter('keys', obj => Object.keys(obj));
}