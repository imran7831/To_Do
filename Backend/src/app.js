import express from 'express';
import Routers from './routers/Routers.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';


dotenv.config();

let app = express();
let PORT =3000;


connectDB();

app.use (express.json());

app.use(express.urlencoded({extended:true}));

app.use('/notes',Routers)

app.post('/',Routers)

app.put('/',Routers)

app.delete('/',Routers)

    app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
});








// mongodb+srv:is564658_db_user:kADmDO7fQ0Cye0NY@cluster0.2k5p3zi.mongodb.net/?appName=Cluster0