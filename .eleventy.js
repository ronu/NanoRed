export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.addPassthroughCopy('src/media');
    eleventyConfig.addFilter('log', any => console.log(any));
    eleventyConfig.addFilter('keys', obj => Object.keys(obj));
    eleventyConfig.addCollection('authors', api => {
        const posts = api.getFilteredByTag('post');
        const authors = {};
        for (const post of posts) {
            const author = post.data.author;
            if (author) {
                if (Array.isArray(authors[author])) {
                    authors[author].push(post);
                } else {
                    authors[author] = [post];
                }
            }
        }
        return authors;
    });
}