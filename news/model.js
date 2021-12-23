import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    author: { type: String },
    title: { type: String },
    description: { type: String },
    url: { type: String },
    urlToImage: { type: String },
    publishedAt: { type: Date },
    keywords: [{ type: String }],

}, { timestamps: true });

export default mongoose.model("news", newsSchema);