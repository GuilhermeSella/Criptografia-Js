import express from 'express'
import { ValidatorCustomer } from '../services/index.js';

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


    return res.status(200).json(loans)
})