import  express, { type RequestHandler }  from 'express';
import routerprodutos from './produto.ts';
//import { interferir } from '../middlewares/interferir.ts';

const router=express.Router();

router.use('/produtos',routerprodutos)
//router.use(interferir)


router.get('/ping',(req, res)=>{
    console.log('executou o ping e pong')
    res.json({pong:true})
});

router.get('/', (req, res)=>{
    res.json('Ola Mundo')
});

export default router;