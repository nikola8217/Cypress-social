import { register } from "../services/auth/registerService.js";
import { login } from "../services/auth/loginService.js";

/* REGISTER USER */
export const registerUser = async (req, res) => {
    
    const result = await register(req.body);

    if (result.error) {
        return res.status(400).json({ error: result.error });
    }

    return res.status(201).json(result);

};

/* LOGGING IN */
export const loginUser = async (req, res) => {

    const result = await login(req.body);

    if (result.error) {
        res.status(401).json({ error: result.error });
    } else {
        res.json(result);
    }

};