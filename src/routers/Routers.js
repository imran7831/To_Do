import express from "express";
import {getAllNotes,AddNewNotes, UpdateNotes,DeleteNotes} from "../controller/notesController.js"

let routers = express.Router();


routers.get('/', getAllNotes);

routers.post('/', AddNewNotes);

routers.put('/:id',UpdateNotes);

routers.delete('/:id',DeleteNotes);


export default routers