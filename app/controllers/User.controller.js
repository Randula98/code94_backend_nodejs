import UserServices from '../services/User.service.js';

const getUser = async (req, res) => {
    try {
        const user = await UserServices.getUser(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const createUser = async (req, res) => {
    try {
        const user = await UserServices.createUser(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await UserServices.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await UserServices.deleteUser(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const login = async (req, res) => {
    try {
        const user = await UserServices.login(req.body.username, req.body.password);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const getFavorites = async (req, res) => {
    try {
        const favorites = await UserServices.getFavorites(req.params.id);
        res.status(200).json(favorites);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const updateFavorites = async (req, res) => {
    try {
        const favorites = req.body;
        const updatedFavorites = await UserServices.updateFavorites(req.params.id, favorites);
        res.status(200).json(updatedFavorites);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

export default {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login,
    getFavorites,
    updateFavorites
};
