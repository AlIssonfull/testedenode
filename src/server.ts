import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/index.ts';
import { errorhandler, notFoundRequest } from 'errorhandler.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server= express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../publico')));

server.use('/', router);
server.use(notFoundRequest)
server.use(errorhandler)

server.listen(5000, ()=>{
    console.log('Server funcionado no http://localhost:5000/')
});