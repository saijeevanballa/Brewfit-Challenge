import News from "./model.js"
import axios from "axios";

const { BASE_URL, API_KEY } = process.env;

export async function getNews(keyword) {
    try {
        if (!keyword) throw new Error("Keyword is required");
        let news = await News.find({ keywords: { $in: [keyword] } });
        if (news.length) return news;
        let posts = await axios.get(`${BASE_URL}?q=${keyword}&apiKey=${API_KEY}&sortBy=publishedAt`);
        if (posts.data.status !== "ok") throw new Error("Something went wrong");
        posts = posts.data.articles.map(post => ({ ...post, keywords: [keyword] }));
        posts = await News.insertMany(posts);
        return posts;
    } catch (error) {
        throw error;
    }
}