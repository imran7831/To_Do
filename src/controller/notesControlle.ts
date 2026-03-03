import { Request,Response } from "express";

export function getAllNotes (req:Request,res:Response){
    res.send("you get 30 notes");
}

export function AddNewNotes(req:Request,res:Response){
    res.status(201).send("you create notes succesfully")
 }

export function UpdateNotes(req:Request,res:Response){
    res.status(200).send("you update notes succesfully")
 }

export function DeleteNotes(req:Request,res:Response){
    res.status(200).send("you delete notes succesfully")
}
