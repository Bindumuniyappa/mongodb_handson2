const mongoClient=require("../database/connection")


const studentEnrollment=async (req,res)=>{
    const studentData=req.body;

    try{
        const result=await mongoClient.insertToDB(studentData);
        console.log(result)
        return res.status(200).send(result);
    }
    catch(error){
        console.log("Something went wrong while performing db operation")
        res.status(500).send({message:"Something went wrong while performing the operation"});
    }
};
const studentFind=async (req,res)=>{
    const queryParams=req.query;
    console.log(queryParams)
    const query={"salary":{$gt:"30000"}}
    try{
       const result=await  mongoClient.findInDB(query);
       console.log(result);
     return res.status(200).send({message:"here is the data=>"})
       
    }
    catch(error){
        console.log("Something went wrong while performing db operation" ,error);
        return res.status(500).send({message:"Something went wrong while performing the operation"})
    }
}
const studentFindExp=async (req,res)=>{
    const queryParams=req.query;
    console.log(queryParams)
    const query={"overallExp":{$gt:"2"}}
    try{
       const result=await  mongoClient.findInDB(query);
       console.log(result);
     return res.status(200).send({message:"here is the data=>"})
       
    }
    catch(error){
        console.log("Something went wrong while performing db operation" ,error);
        return res.status(500).send({message:"Something went wrong while performing the operation"})
    }
}

const studentFindExpAndGrad=async (req,res)=>{
    const queryParams=req.query;
    console.log(queryParams)
    const query={"yearGrad":{$gt:"2015"} && {"overallExp":{$gt:"2"}} }
    try{
       const result=await  mongoClient.findInDB(query);
       console.log(result);
     return res.status(200).send({message:"here is the data=>"})
       
    }
    catch(error){
        console.log("Something went wrong while performing db operation" ,error);
        return res.status(500).send({message:"Something went wrong while performing the operation"})
    }
}



const studentUpdate = async (req, res) => {
    const updateData = req.body;
    const filter = updateData.filter;
    const value = {$set: updateData.value}
    console.log(filter);
    console.log(value);
    try {
        const result = await mongoClient.updateInDB(filter, value);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}


const studentDelete = async (req, res) => {
    const condition = req.query;
    console.log(condition);
    try {
        const result = await mongoClient.deleteInDB(condition);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports={
    studentEnrollment,studentFind,studentFindExp,studentFindExpAndGrad,studentUpdate,studentDelete
}




