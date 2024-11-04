import Product from '../models/Product.model.js';
import User from "../models/User.model.js";
import UploadService from './Upload.service.js';

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
    try {
        const product = await Product.findById(id);
        if (!product) {
            throw new Error('Product not found');
        }
        await User.updateMany(
            { favoriteProducts: id },
            { $pull: { favoriteProducts: id } }
        );
        for (const imageUrl of product.images) {
            await UploadService.deleteImage(imageUrl);
        }
        return await Product.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(`Failed to delete product: ${error.message}`);
    }
};

const searchProducts = async (query) => {
    return await Product.find({
        $or: [
            { sku: { $regex: query, $options: 'i' } },
            { name: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } }
        ]
    });
}


export default {
    getProducts,
    getProduct,
    getProductsByUser,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
};