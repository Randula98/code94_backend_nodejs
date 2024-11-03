import Product from '../models/Product.model.js';

const getProducts = async () => {
    return await Product.find();
}

const getProduct = async (id) => {
    return await Product.findById(id);
}

const getProductsByUser = async (userId) => {
    return await Product.find({ user: userId });
}

const createProduct = async (product) => {
    return await Product.create(product);
}

const updateProduct = async (id, product) => {
    return await Product.findByIdAndUpdate(id, product, { new: true });
}

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
}

export default {
    getProducts,
    getProduct,
    getProductsByUser,
    createProduct,
    updateProduct,
    deleteProduct
};