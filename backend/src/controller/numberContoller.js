const numberModel = require("../model/numberModel")


const checkNumber = async(req,res)=>{
    try {
        // let number = req.body
        const {number} = req.body
        // if(number !== Number){
        //     return res.status(400).send({status:true,msg:"Please Enter number Only Not Anything Else"})
        // }
        let genNum =Math.round(Math.random() * 9);
        console.log(genNum)

        if(number === genNum){
            let savegame = await numberModel.create(number)
        return res.status(200).send({status:true,msg:"Congratulation For the Correct Predictionn the winner Num is ",data:{genNum,savegame}})
        }else{
            let savegame = await numberModel.create(number)
            return res.status(200).send({status:false,msg:"Opps! Sorry You lost the Prediction " ,data:genNum})
        }



    } catch (error) {
        console.log(error)
        return res.status(500).json({status:true,mesg:error.message})
    }
}


const gameDetail = async (req,res)=>{
    try {
        let playlist = await numberModel.find()
        return res.status(200).send({status:true,data:playlist})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:true,mesg:error.message})
    }
}

module.exports={checkNumber,gameDetail}