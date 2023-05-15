import { create } from "../services/post/createService.js";

export const createPost = async (req, res) => {
    
    const result = await create(req.body);

    if (result.error) {
        res.status(400).json({ error: result.error });
    } else {
        res.status(201).json(result);
    }

};