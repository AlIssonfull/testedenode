import  express  from 'express';

const router=express.Router();

router.get('/', (req, res)=>{
    res.json({produtos:[]})
});

router.post('/', (req, res)=>{
    console.log('PARAMS', req.params)
    console.log('Query', req.query)
    console.log('body', req.body)
});

router.get('/:item/:cor', (req, res)=>{
    const {item,cor} =req.params;

    res.json({produto:{item:item.toUpperCase(),cor:cor.toUpperCase(),preco:99}})
});

export default router;