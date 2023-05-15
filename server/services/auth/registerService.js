import User from "../../models/User.js";
import generateToken from "../../utils/generateToken.js";

export const register = async (userData) => {
    const {
        name,
        email,
        password,
        passConfirm,
        img,
        friends,
        location,
        occupation,
        about
    } = userData;

    if (name === '' || email === '' || password === '' || passConfirm === '' || location === '' || occupation === '' || about === '') {
        return { error: 'You must fill in all fields' };
    }

    if (password !== passConfirm) {
        return { error: "Passwords don't match" };
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        return { error: 'User already exists' };
    }

    const user = new User({
        name,
        email,
        password,
        img,
        friends,
        location,
        occupation,
        about
    });

    await user.save();

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        location: user.location,
        occupation: user.occupation,
        about: user.about,
        token: generateToken(user._id)
    };
};