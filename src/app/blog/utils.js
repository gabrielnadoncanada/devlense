import dummyData from './dummyData.json';

export async function getPost(slug) {
    const post = dummyData.posts.find(post => post.slug === slug);
    return post || null;
}

export async function getPosts(start, end, category) {
    let filteredPosts = category
        ? dummyData.posts.filter(post => post.category === category)
        : dummyData.posts;
    return filteredPosts.slice(start, end);
}

export async function getFeaturedPosts(count) {
    return dummyData.posts.slice(0, count);
}

export async function getCategories() {
    return dummyData.categories;
}

export async function getPostsCount(category) {
    return category
        ? dummyData.posts.filter(post => post.category === category).length
        : dummyData.posts.length;
}