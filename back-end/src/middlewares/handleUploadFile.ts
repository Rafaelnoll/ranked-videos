import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import crypto from 'crypto';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = crypto.randomBytes(16).toString('hex');
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedTypes = ['video/mp4', 'video/mkv', 'video/avi'];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('File not allowed. Only videos are accepted.'));
  }

  const maxSize = 10 * 1024 * 1024; // 10 MB
  if (file.size > maxSize) {
    return cb(new Error('The file exceeds the maximum allowed size of 10 MB.'));
  }

  cb(null, true);
};

export const handleUpload = multer({ storage, fileFilter })
