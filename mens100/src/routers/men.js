const express=require ("express");
const router=new express.Router();
const mensRanking=require("../models/mens");
// post method= 
router.post("/mens",async(req,res)=>{
    try{
        const addingMensRecords =   new mensRanking(req.body)
        console.log(req.body)
        const insertMens=await addingMensRecords.save();
        res.status(201).send(insertMens);
      
        addingMensRecords.save();
    }catch(e){
          res.status(400).send(e);
    }
   })
   //get method
router.get("/mens",async(req,res)=>{
try{
    
    const getMens=await mensRanking.find({}).sort({"ranking":1});
    res.send(getMens);
   
    
}catch(e){
      res.status(400).send(e);
}
})


//we will handle get req if indiv
router.get("/mens/:id",async(req,res)=>{
   try{
       const _id=req.params.id
       const getMen=await mensRanking.findById({_id});
       res.send(getMen);
      
       
   }catch(e){
         res.status(400).send(e);
   }
  })

  //we will handle patch req if indiv
router.patch("/mens/:id",async(req,res)=>{
   try{
       const _id=req.params.id
       const getMen=await mensRanking.findByIdAndUpdate(_id,req.body,{new:true});
       res.send(getMen);
      
       
   }catch(e){
         res.status(500).send(e);
   }
  })

  //we will handle  delete req if indiv
router.delete("/mens/:id",async(req,res)=>{
   try{
       
       const getMen=await mensRanking.findByIdAndDelete(req.params.id);
       res.send(getMen);
      
   }catch(e){
         res.status(500).send(e);
   }
  })

  module.exports=router;