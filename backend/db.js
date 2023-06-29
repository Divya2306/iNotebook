const mongoose=require("mongoose");
const mongoURI="mongodb://localhost:27017/";

const connectToMongo=async ()=>{
    try{
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoURI,()=>{
            console.log("connected to mongo successfully");
        })
    }
    catch(error){
        console.log(error);
    }
    
};

module.exports=connectToMongo;