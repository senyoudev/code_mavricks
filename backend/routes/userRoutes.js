import express from 'express'

const router = express.Router()

router.route('/').get(protect,admin,getUsers)
router.route('/login').post(login)
router.route('/register').post(register)
router
  .route('/profile')
  .get(protect,getUserProfile)
  .put(protect,updateUserProfile)

router
  .route('/:id')
  .delete(protect, admin,deleteUser)
  .get(protect,getUserById)
  .put(protect, admin,updateUser)








export default router