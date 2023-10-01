import express from 'express'
import { ValidatorCustomer } from '../services/validate-cos.js';

export const router = express.Router();


router.post("/customer-loans", (req, res)=>{

    
    const customerInfo = {
        age: req.body.age,
        cpf: req.body.cpf,
        name: req.body.name,
        income: req.body.income,
        location: req.body.location
    }

    const loans = ValidatorCustomer(customerInfo)

    const costumerFinal = {
        customer: req.body.name,
        loans : loans
    }


    return res.status(200).json(costumerFinal)
})