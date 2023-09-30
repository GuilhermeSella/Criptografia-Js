import express from 'express'

export const router = express.Router();


router.post("/customer-loans", (req, res)=>{

    const customerInfo = {
        age: req.body.age,
        cpf: req.body.cpf,
        name: req.body.name,
        income: req.body.income,
        location: req.body.location
    }

    


    return res.status(200).json(customer)
})