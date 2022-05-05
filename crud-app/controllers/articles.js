const article = require("../models/article");

exports.create = async(req,res)=>{
    const newArticle = new article(req.body);
    try{
       const savedArticle = await newArticle.save();
       res.status(200).json("Article has been created");
    }  catch (err){
        res.status(500).json(err);
    }
};

exports.getAll = async(req,res)=>{
    try {
        const Article = await article.find();
        res.status(200).json(Article);
    } catch (err){
        res.status(500).json(err);
    }
    
};

exports.getOne = async(req,res)=> {
    try{
        const Article = await article.findById(req.params.id);
        res.status(200).json(Article);
    } catch (err){
        res.status(500).json(err);
    }
    
};

exports.update = async(req,res)=> {
    try{
        const updatedArticle = await article.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},{new:true}
        );
        res.status(200).json(updatedArticle)
    } catch (err){
        res.status(500).json(err);
    }
};

exports.delete = async(req,res)=>{
    try{
        const Article = await article.findByIdAndDelete(req.params.id);
        Article.delete();
        res.status(200).json('Article has been deleted');
    } catch (err){
        res.status(500).json('Article has not deleted');
    }
    
};