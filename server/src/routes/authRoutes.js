// server/src/routes/authRoutes.js
import express from 'express';
import multer from 'multer';
import { register, login, logout } from '../controllers/authController.js';

const router = express.Router();

// ✅ Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // save files in /uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// ✅ POST /api/auth/register with image upload
router.post(
  '/register',
  upload.fields([
    { name: 'faceImage', maxCount: 1 },
    { name: 'workImage', maxCount: 1 }
  ]),
  register
);

// POST /api/auth/login
router.post('/login', login);

// POST /api/auth/logout
router.post('/logout', logout);

export default router;
