let nome: string ="Alisson";
let idade: number=15;
let token=process.env.GOOGLE_DRIVE_TOKEN as string;

console.log(`eita que o ${nome} de ${idade} anos colocou pra funcionar`);
console.log(`Conectando o Token do Drive: ${token}`)