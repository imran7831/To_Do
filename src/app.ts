import express from 'express';
import notes from './routers/notes';

let app = express();
let PORT =3000;

app.use (express.json());

app.use(express.urlencoded({extended:true}));

app.use('/notes',notes)

app.post('/',notes)

app.put('/',notes)

app.delete('/',notes)

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
});