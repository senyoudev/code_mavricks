import mongoose from 'mongoose'

const articleSchema = mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    images: {
        type: String,
        required: true,
    },
    keywords: {
    type: [String],
    default: [],
    max:4
  },
  creator: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
},
},
 {
    timestamps: true,
  })

const Article = mongoose.model('Articles',articleSchema)

export default Article