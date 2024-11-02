import User from "../models/User.Model.js";
import { createToken } from "../middlewares/user.middleware.js";

const getUser = async (id) => {
    return await User.findById(id);
}

const createUser = async (user) => {
    return await User.create(user);
}

const updateUser = async (id, user) => {
    return await User.findByIdAndUpdate(id, user, { new: true });
}

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}

const login = async (username, password) => {
    try {
        const user = await
            User.findOne({ username: username });
        if (!user) {
            return { user: false, password: false, message: 'User not found' };
        }
        const match = await user.comparePassword(password);
        if (!match) {
            return { user: true, password: false, message: 'Wrong Password' };
        }
        const token = createToken(user);
        return { user: true, password: true, token: token };
    }
    catch (error) {
        return { user: false, password: false, message: 'An error occurred', error };
    }
}

export default {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login
};
