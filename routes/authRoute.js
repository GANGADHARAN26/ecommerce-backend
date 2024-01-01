const express = require("express");
const {
  CreateUser,
  loginUserCtrl,
  getallUsers,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefershToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  createOrder,
  removeProductFromCart,
  updateProductQuantityFromCart,
  getMyOrders,
  getMonthWiseOrderIncome,
  getMonthWiseOrderCount,
  getYearlyTotalOrders,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  emptyCart
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const cartModel = require("../models/cartModel");
const { checkout, paymentVerification } = require("../controller/paymentCtrl");
const router = express.Router();

router.post("/register", CreateUser);
router.post('/forgot-password-token', forgotPasswordToken)
router.put('/reset-password/:token', resetPassword)
// router.put('/order/update-order/:id',authMiddleware,isAdmin,updateOrderStatus)
router.put("/password",authMiddleware,updatePassword)
router.post("/login", loginUserCtrl);
router.post("/admin-login",loginAdmin)
router.post("/cart",authMiddleware,userCart)
router.post("/order/checkout",authMiddleware,checkout)
router.post("/order/paymentVerification",authMiddleware,paymentVerification)
// router.post("/cart/applycoupon",authMiddleware,applyCoupon)
router.post("/cart/create-order",authMiddleware,createOrder)
router.get("/all-users", getallUsers);

router.get("/getmyorders",authMiddleware,getMyOrders); 

router.get("/getallorders",authMiddleware,isAdmin,getAllOrders);
router.get("/getaOrder/:id",authMiddleware,isAdmin,getSingleOrder);
router.put("/updateOrder/:id",authMiddleware,isAdmin,updateOrder);
// router.post("/getorderbyuser/:id",authMiddleware,isAdmin,getOrderByUserId);
router.get("/getMonthWiseOrderIncome", authMiddleware,  getMonthWiseOrderIncome);
router.get("/getyearlytotalorders", authMiddleware,  getYearlyTotalOrders);

router.get("/refresh", handleRefershToken);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/empty-cart", authMiddleware,emptyCart)
router.delete("/delete-product-cart/:cartItemId", authMiddleware,removeProductFromCart)
router.delete("/update-product-cart/:cartItemId/:newQuantity", authMiddleware,updateProductQuantityFromCart)

router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
module.exports = router;
