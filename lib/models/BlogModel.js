import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true
    },
    authore: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    authorimg: {
        type: String,
        require: true
    },
    date: {
        type: String,
        default: Date.now()
    },

})

const BlogModel = mongoose.models.blog || mongoose.model('blog', Schema);
export default BlogModel;