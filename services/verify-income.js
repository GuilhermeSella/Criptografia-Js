
export const VerifyIncome = (req,res,next)=>{
    const {income, age, location} = req.body;

    if(!income || !age || !location) return res.status(400).json({error: "Preencha todas informações!"})

    return next();

}