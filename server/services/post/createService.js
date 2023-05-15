import Post from "../../models/Post.js";

export const create = async (userData) => {
    const {
        user,
        description,
        img
    } = userData;

    if (description === '' && img === '') {
        res.status(400);
        throw new Error('Write something!');
    }

    const post = new Post({
        user,
        description,
        img
    });

    await post.save();
    
    return {
        _id: post._id,
        user: post.user,
        description: post.description,
        img: post.img
    };
}