import express from 'express'
import { addArticle, deleteArticle, getArticleById, getArticles, getArticlesByUser, updateArticleById } from '../controllers/articleControllers.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/')
    .get(getArticles)
    .post(protect,addArticle)



router
    .route('/:id')
    .put(protect,updateArticleById)
    .delete(protect,deleteArticle)
    .get(getArticleById)

router
    .route('/user')
    .get(protect,getArticlesByUser)



export default router