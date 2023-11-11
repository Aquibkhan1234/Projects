 import express from "express";
 const app = express();
 //import mongoose from "mongoose";
 import User from "../models/userModels.js"

 const router = express.Router();
 
 // create 
 router.post ('/', async(req, res) => {
    const {name , email , age } = req.body;
  try{
    const userAdded =  await User.create({
         name : name,
         email : email,
         age: age,
    }) 
    res.status(201).json(userAdded)
} catch(error){
    res.status(400).json({error : error.message})
}
   })
   // Get 

    router.get("/", async(req, res) => {
        try{
          const showAll = await User.find();
          res.status(200).json(showAll);
        }catch(error){
            res.send(500).json({error : error.message });
        }
    });

    //Get single user
  
    router.get("/:id", async(req, res)=> {
        const {id} = req.params;
        try{
            const singleUser = await User.findById({_id: id});
            res.status(200).json(singleUser);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    });

    //delete

    router.delete("/:id", async(req,res) => {
        const {id} = req.params;
        try{
           const singleUser = await User.findByIdAndDelete({_id : id});
           res.status(200).json(singleUser)
        }catch(error){
            res.status(500).json({error: error.message})

        }
    });

    //put/patch
   router.patch("/:id", async(req, res) => {
    const {id} = req.params;
    const { name , email , age } = req.body;

    try{
        const updateUser = await User.findByIdAndUpdate({_id : id}, req.body , {new : true})
        res.status(200).json(updateUser);
    }catch(error){
res.status(500).json({error: error.message})
    }
   })

    export default router;