import UploadService from '../services/Upload.service.js';

const uploadImages = async (req, res) => {
    try {
        const uploadedImageUrls = await UploadService.uploadImage(req.files);
        res.status(200).json({ imageUrls: uploadedImageUrls });
    } catch (error) {
        console.error('Error uploading images:', error);
        res.status(500).json({ error: 'Failed to upload images' });
    }
};

const deleteImage = async (req, res) => {
    try {
        console.log('req.body:', req.body);
        console.log('imageUrl:', req.body.imageUrl);
        const imageUrl = decodeURIComponent(req.body.imageUrl);
        await UploadService.deleteImage(imageUrl);
        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).json({ error: 'Failed to delete image' });
    }
};

export default { uploadImages, deleteImage };