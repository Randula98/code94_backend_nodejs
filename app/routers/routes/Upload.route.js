import express from 'express';
import UploadController from '../../controllers/Upload.controller.js';
import { upload } from '../../middlewares/upload.middleware.js';

const router = express.Router();

router.post('/', upload, UploadController.uploadImages);
router.delete('/', UploadController.deleteImage);

export default router;