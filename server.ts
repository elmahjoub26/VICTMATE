import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app=express(); const port=Number(process.env.PORT||3000); const root=path.dirname(fileURLToPath(import.meta.url));
app.use(express.json()); app.get('/api/health',(_,res)=>res.json({status:'ok',service:'VICTMATE API'}));
if(process.env.NODE_ENV==='production'){app.use(express.static(path.join(root,'dist')));app.get('*',(_,res)=>res.sendFile(path.join(root,'dist/index.html')))}
app.listen(port,'0.0.0.0',()=>console.log(`VICTMATE running on ${port}`));
