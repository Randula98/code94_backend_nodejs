import fs from 'fs/promises';
import path from 'path';

const uploadImage = async (files) => {
    const uploadedImageUrls = files.map((file) => `/uploads/${file.filename}`);
    return uploadedImageUrls;
};

const deleteImage = async (imageUrl) => {
    try {
        const imagePath = path.join(
            process.cwd(),
            imageUrl
        );
        await fs.unlink(imagePath);
    } catch (error) {
        console.error('Error deleting image:', error);
        throw new Error('Failed to delete image');
    }
};

export default {
    uploadImage,
    deleteImage
}