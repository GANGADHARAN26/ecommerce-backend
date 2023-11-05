const express = require("express");
const {
  CreateUser,
  loginUserCtrl,
  getallUsers,
  getaUser,
  deleteaUser,
  updateaUser,
  blockUser,
  unblockUser,
  handleRefershToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", CreateUser);
router.post('/forgot-password-token', forgotPasswordToken)
router.put('/reset-password/:token', resetPassword)
router.put("/password",authMiddleware,updatePassword)
router.post("/login", loginUserCtrl);
router.get("/all-users", getallUsers);
router.get("/refresh", handleRefershToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updateaUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
module.exports = router;
