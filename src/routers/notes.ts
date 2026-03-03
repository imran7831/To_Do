import express from "express";
import {getAllNotes,AddNewNotes, UpdateNotes,DeleteNotes} from "../controller/notesControlle"

let notes = express();


notes.get('/', getAllNotes);

notes.post('/', AddNewNotes);

notes.put('/:id',UpdateNotes);

notes.delete('/:id',DeleteNotes);


export default notes