// server/src/controllers/authController.js
import { registerUser, loginUser, logoutUser } from '../services/authService.js';

export const register = async (req, res) => {
  try {
    // Extract uploaded file paths
    const faceImage = req.files?.faceImage?.[0]?.path || null;
    const workImage = req.files?.workImage?.[0]?.path || null;

    // Merge body with file paths
    const userData = {
      ...req.body,
      faceImage,
      workImage
    };

    const user = await registerUser(userData);

    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    await logoutUser(req.user); // assumes JWT middleware attaches user
    res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
