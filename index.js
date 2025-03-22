const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors');
const Product = require('./model/product.model');
const app=express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.listen(5000,()=>{
    console.log("Server is running on 5000")
})



mongoose.connect('mongodb+srv://nimeshspc2k17:kingnimesh26@fashionora.6k3f4.mongodb.net/?retryWrites=true&w=majority&appName=fashionora')
.then(()=>console.log('connected!'))
.catch((err)=>console.log(err))

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};


const addProducts=async(req,res)=>{
    try{
        const product=new Product(req.body)
        await product.save()
        res.status(201).json("Success")}
        catch(error){
            res.status(500).json({message:"Server Error",error})
        }
}
const getWomen=async(req,res)=>{
    try{
        const womenItem=await Product.find({category:'Women'})
        if(womenItem){
            res.status(200).json(womenItem)
        }
        else{
            res.status(404).json({message:"No item found"})
        }
    }
    catch(e){
        res.status(500).json({message:e,})
    }
}

const getMen=async(req,res)=>{
    try{
        const menItem=await Product.find({category:'Men'})
        if(menItem){
            res.status(200).json(menItem);
        } else{
            res.status(404).json({message:"No item found"})
        }
    }
    catch(e){
        res.status(500).json({message:e})
    }
}
const getKids=async (req,res)=>{
    try{
        const kidItems=await Product.find({category:'Kids'})
        if(kidItems){
            res.status(200).json(kidItems)
        } else{
            res.status(404).json({message:"No item found"})
        }
    }
    catch(e){
        res.status(500).json({message:e})
    }
}
const getOther=async (req,res)=>{
    try{
        const otherItem=await Product.find({category:'Other'});
        if(otherItem){
            res.status(200).json(otherItem)
        } else
        {
            res.status(404).json({message:"No item found"})
        }
    } catch(e){
        res.status(500).json({message:e})
    }
}

const getbyId=async (req,res)=>{
    try{
        const id=req.params._id

        const item=await Product.findById(id)
        if(item){
            res.status(200).json(item)
        }
        else{
            res.status(404).json({message:"No item found"})
        }
    }
    catch(e){
        res.status(500).json({message:e})
    }
}
const getwomenColors=async(req,res)=>{
    try{
        const womenColors=await Product.distinct("color",{category:"Women"})
        if(womenColors){
            res.status(200).json(womenColors)
        }
        else{
            res.status(404).json({message:"No item found"})
        }
    }catch(e){
        res.status(500).json({message:e})
    }
}
const getmenColors=async(req,res)=>{
    try{
        const menColors=await Product.distinct("color",{category:"Men"})
        if(menColors){
            res.status(200).json(menColors)
        }
        else{
            res.status(404).json({message:"No item found"})
        }
    }catch(e){
        res.status(500).json({message:e})
    }
}
const getotherColors=async(req,res)=>{
    try{
        const kidsColors=await Product.distinct("color",{category:"Other"})
        if(kidsColors){
            res.status(200).json(kidsColors)
        }
        else{
            res.status(404).json({message:"No item found"})
        }
    }catch(e){
        res.status(500).json({message:e})
    }
}
const getkidsColors=async(req,res)=>{
    try{
        const menColors=await Product.distinct("color",{category:"Kids"})
        if(menColors){
            res.status(200).json(menColors)
        }
        else{
            res.status(404).json({message:"No item found"})
        }
    }catch(e){
        res.status(500).json({message:e})
    }
}

const getbyCategory=async(req,res)=>{
    try{
        const category=req.params.category
        const products=await Product.find({category:category})
        if(products){
            res.status(200).json(products)
            }
            else{
                res.status(404).json({message:"No item found"})
                }
    }
    catch(e){
        res.status(500).json({message:e})
    }
}

app.get('/getproducts', getProducts);
app.post('/addproducts',addProducts)
app.get('/getWomen',getWomen)
app.get('/getMen',getMen);
app.get('/getKids',getKids);
app.get('/getOthers',getOther);
app.get('/getbyId/:_id',getbyId)
app.get('/getwomenColors',getwomenColors)
app.get('/getMenColors',getmenColors)
app.get('/getOtherColors',getotherColors)
app.get('/getKidsColors',getkidsColors)
app.get('/getbycategory/:category',getbyCategory)