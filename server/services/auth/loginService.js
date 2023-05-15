import User from "../../models/User.js";
import generateToken from "../../utils/generateToken.js";

export const login = async (userData) => {
    const { email, password } = userData;

    if (email === '' || password === '') {
        return { error: 'You must fill in all fields!' };
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            location: user.location,
            occupation: user.occupation,
            about: user.about,
            token: generateToken(user._id)
        };
    } else {
        return { error: 'Invalid email or password' };
    }
};