import express from 'express'
import { deleteUser, getUserById, getUserProfile, getUsers, login, makeUserAdmin, register, updateUser, updateUserProfile } from '../controllers/userControllers.js'
import { admin, protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router
    .route('/')
    .get(protect,admin,getUsers)
    .post(protect,admin,register)

router
    .route('/login')
    .post(login)

router
  .route('/profile')
  .get(protect,getUserProfile)
  .put(protect,updateUserProfile)

router
  .route('/:id')
  .delete(protect, admin,deleteUser)
  .get(protect,getUserById)
  .put(protect, admin,updateUser)

router
    .route('/admin/:id')
    .put(protect,admin,makeUserAdmin)








export default router