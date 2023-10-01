import express from 'express'
import { router } from './routes/routes.js';
import { VerifyIncome } from './services/verify-income.js';

const app = express();

app.use(express.json())
app.use(VerifyIncome)

app.use("/", router)

app.listen(3000, ()=>{
    console.log("Servidor rodando! porta: 3000" )
})