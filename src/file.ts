import { readFile, unlink, writeFile } from "fs/promises";

const exec= async()=>{

}

exec();

/*Para escrever
console.log('Escrevendo no arquivo...');

    const list= ['alisson','alexandre','alessandra'];
    const listTxt=list.join('\n')

    await writeFile('./test.txt',listTxt);
    console.log('Pronto');

Para ler
const filecontent= await readFile('./test.txt',{encoding: 'utf-8'});
    console.log(filecontent);
    
    Em arry
    const filecontent= await readFile('./test.txt',{encoding: 'utf-8'});
    const list=filecontent.split("\n")
    console.log(list);

    Del await unlink('./test.txt')
    */