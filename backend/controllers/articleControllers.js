import Article from "../models/Article.js";
import asyncHandler from 'express-async-handler'
import User from "../models/User.js";
import mongoose from "mongoose";

// @desc    Fetch all articles
// @route   GET /api/articles
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find({})
    res.status(200).json(articles)
})
// @desc    Fetch an article by its id
// @route   GET /api/articles/:id
// @access  Public
const getArticleById = asyncHandler(async(req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `No post with id: ${id}` });
    const article = await Article.findById(id)
    if(article) {
        res.status(200).json(article)
    } else {
        res.status(404).json({message:"There is not post "})
    }
})

// @desc    Create a new article
// @route   POST /api/articles
// @access  Private
const addArticle = asyncHandler(async(req,res) => {
      const {
        title, content, image,keywords
    } = req.body

    const article = new Article()
    article.title = title
    article.content = content
    article.image = image
    article.keywords = keywords
    article.creator = req.user.id
    const createdArticle = await article.save()
    
    res.status(201).json(createdArticle)
})

// @desc    Fetch all the articles written by a user
// @route   GET /api/articles/user
// @access  Private
const getArticlesByUser = asyncHandler(async(req,res) => {
  const user = await User.findById(req.user._id)

  if(user) {
    const articles = await Article.find({creator:user._id})
    res.status(200).json(articles)
  } else {
    res.status(404).json({message:"User not Found"})
  }
})

// @desc    edit an article
// @route   POST /api/articles/:id
// @access  Private
const updateArticleById = asyncHandler(async(req,res) => {
    const { id } = req.params;
    const { title, content, image,keywords } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:`No article with id: ${id}`});
    const article = await Article.findById(id)
    if (article.creator.toString() == req.user._id || req.user.isAdmin === true) {
        article.title = title || article.title
        article.content = content || article.content
        article.image = image || article.image
        article.keywords = keywords || article.keywords
            await article.save()
        res.status(201).json(article)
    } else {
        res.status(401).json({message:"you can only edit your articles if you are not an admin"})
    }
})

// @desc    delete an article
// @route   DELETE /api/articles/:id
// @access  Private
const deleteArticle = asyncHandler(async(req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:`No post with id: ${id}`});
    const article = await Article.findById(id)
    if(article) {
    if (article.creator.toString() == req.user._id || req.user.isAdmin === true) {
        await article.remove()
        res.status(201).json({ message: "Post removed" })
    } else {
        res.status(401).json({ message: "You can only delete your articles if you are not an Admin" })
    }
    } else {
        res.status(404).json({message:"Article not found"})
    }
})




export {
    getArticles,
    addArticle,
    getArticlesByUser,
    updateArticleById,
    getArticleById,
    deleteArticle
}