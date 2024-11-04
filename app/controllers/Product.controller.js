import ProductServices from '../services/Product.service.js';

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductServices.getProducts();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await ProductServices.getProduct(req.params.id);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const getProductsByUser = async (req, res) => {
    try {
        const products = await ProductServices.getProductsByUser(req.params.userId);
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const createProduct = async (req, res) => {
    try {
        const productObject = req.body;
        const product = await ProductServices.createProduct(productObject);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const updateProduct = async (req, res) => {
    try {
        const productObject = req.body;
        const product = await ProductServices.updateProduct(req.params.id, productObject);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const deleteProduct = async (req, res) => {
    try {
        await ProductServices.deleteProduct(req.params.id);
        res.status(200).json({ message: 'Item Deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

const searchProducts = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.status(400).json({ message: 'Query parameter is required' });
        }

        const products = await ProductServices.searchProducts(query);
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

export default {
    getAllProducts,
    getProduct,
    getProductsByUser,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
}