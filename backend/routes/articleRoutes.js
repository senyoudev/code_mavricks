import express from 'express'
import { addArticle, getArticles } from '../controllers/articleControllers.js'

const router = express.Router()

router.route('/')
    .get(getArticles)
    .post(addArticle)



export default router